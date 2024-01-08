const AWS = require('aws-sdk')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var bodyParser = require('body-parser')
var express = require('express')
const { v4: uuidv4 } = require('uuid')
AWS.config.update({ region: process.env.REGION });
const ses = new AWS.SES({
  region: process.env.REGION,
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
let tableName = "idenbridjpcontactus";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});
const sendEmail = async (emailData) => {
  let emailParams = {
    Destination: {
      ToAddresses: [
        emailData.to,
      ]
    },
    Message: {
      Body: {
        Text: {
          Data: emailData.body
        }
      },
      Subject: {
        Data: emailData.subject
      }
    },
    Source: emailData.from,
  };
  try {
    await ses.sendEmail(emailParams).promise();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
app.get('/contactus', async (request, response) => {
  try {
    const params = {
      TableName: tableName,
      Limit: 100,
    };
    const result = await dynamodb.scan(params).promise();
    response.status(200).json({ data: result.Items });
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});
app.get('/contactus/:id', async (request, response) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        id: request.params.id
      }
    };
    const result = await dynamodb.get(params).promise();
    response.status(200).json({ data: result.Item });
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});
app.post('/contactus', async (request, response) => {
  const timestamp = new Date().toISOString();
  try {
    let params = {
      TableName: tableName,
      Item: {
        ...request.body,
        id: uuidv4(),
        createdAt: timestamp,
      }
    }
    await dynamodb.put(params).promise();
    let emailBody = {
      from: process.env.SOURCE_EMAIL,
      to: process.env.SOURCE_EMAIL,
      body: `
      Dear Admin,

      You have received a new contact form submission with the following details:

      Inquiry Matters: ${request.body.inquiryMatter}
      Company Name: ${request.body.companyName}
      Name Of Person InCharge: ${request.body.inchargePerson}
      Email: ${request.body.email}
      Phone Number: ${request.body.phoneNo}
      Content Of Inquiry: ${request.body.description}

      Please review the application and take appropriate action.

      Thank you for your attention.
      `,
      subject: 'New Contact Form Submission'
    }
    await sendEmail(emailBody)
    let adminEmailBody = {
      from: process.env.SOURCE_EMAIL,
      to: request.body.email,
      body: `
      Dear ${request.body.inchargePerson},

      We are pleased to inform you that your Contact Form has been successfully submitted. Thank you for reaching out to us.

      Here are the details you provided:
      
      Inquiry Matters: ${request.body.inquiryMatter}
      Company Name: ${request.body.companyName}
      Name Of Person InCharge: ${request.body.inchargePerson}
      Email: ${request.body.email}
      Phone Number: ${request.body.phoneNo}
      Content Of Inquiry: ${request.body.description}

      We appreciate your interest, and our team will get back to you as soon as possible to address your inquiry. If you have any additional questions or need further assistance, please feel free to reply to this email or contact us at contact@idebrid.jp

      We look forward to assisting you further.
      `,
      subject: 'Contact Form Submitted Successfully'
    }
    await sendEmail(adminEmailBody)
    response.status(200).json({ message: 'Your contact form has been successfully submitted. We will get back to you soon.'});
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});
app.delete("/contactus/:id", async function (request, response) {
  try {
    let params = {
      TableName: tableName,
      Key: {
        id: request.params.id
      }
    }
    const result = await dynamodb.delete(params).promise();
    response.status(200).json({ data: result });
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});

app.listen(3000, function () {
  console.log("App started")
});

module.exports = app
