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
let tableName = "idenbridjpcareer";
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

app.get('/career', async (request, response) => {
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

app.get('/career/:id', async (request, response) => {
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

app.post('/career', async (request, response) => {
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
      
      A new Recruitment Application Form has been submitted with the following details:

      Application Type: ${request.body.applicationType}
      Name: ${request.body.username}
      Email: ${request.body.email}
      Phone Number: ${request.body.phoneNo}

      Please review the application and take appropriate action.

      Thank you for your attention.
      `,
      subject: 'New Recruitment Application Submission'
    }
    await sendEmail(emailBody)
    let adminEmailBody = {
      from: process.env.SOURCE_EMAIL,
      to: request.body.email,
      body: `
      Dear ${request.body.username},
      
      We are pleased to inform you that your Recruitment Application Form has been successfully submitted. Thank you for expressing your interest in joining our team.

      Here are the details you provided:

      Application Type: ${request.body.applicationType}
      Name: ${request.body.username}
      Email: ${request.body.email}
      Phone Number: ${request.body.phoneNo}

      Our team will review your application, and if your qualifications match our requirements, we will reach out to you for the next steps in the recruitment process. In the meantime, if you have any questions or need further information, please don't hesitate to contact us at contact@idebrid.jp.

      We appreciate your interest in IDENBRID INC. and look forward to the possibility of working together.
      `,
      subject: 'Recruitment Application Submitted Successfully'
    }
    await sendEmail(adminEmailBody)
    response.status(200).json({ message: 'Your application has been successfully submitted. Thank you for applying!'});
  } catch (error) {
    response.status(500).json({ statusCode: 500, error: error.message });
  }
});

app.delete("/career/:id", async function (request, response) {
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

app.listen(3000, function() {
  console.log("App started")
});

module.exports = app
