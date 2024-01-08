import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner'
import "assets/css/contactus.scss";
import PageHeader from "components/PageHeader/PageHeader";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Contactus() {
  const [isLoading, setLoading] = useState(false)
  const [contactData, setContactData] = useState({
    inquiryMatter: '',
    companyName: '',
    inchargePerson: '',
    email: '',
    phoneNo: '',
    description: ''
  })

  const [errors, setErrors] = useState({
    inquiryMatter: '',
    companyName: '',
    inchargePerson: '',
    email: '',
    phoneNo: '',
    description: ''
  });

  const validateForm = () => {
    let newErrors = {
      inquiryMatter: '',
      companyName: '',
      inchargePerson: '',
      email: '',
      phoneNo: '',
      description: ''
    };

    // Perform form validation
    let isValid = true

    if (!contactData.inquiryMatter) {
      newErrors.inquiryMatter = 'お問い合わせ内容を選択してください。'
      isValid = false
    }

    if (!contactData.companyName) {
      newErrors.companyName = '会社名は必須'
      isValid = false
    }

    if (!contactData.inchargePerson) {
      newErrors.inchargePerson = '担当者名は必須'
      isValid = false
    }

    if (!contactData.email) {
      newErrors.email = 'Eメールが必要です。'
      isValid = false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
      newErrors.email = 'メールアドレスが無効です。'
      isValid = false
    }

    if (!contactData.phoneNo) {
      newErrors.phoneNo = '電話番号は必須。'
      isValid = false
    }

    if (!contactData.description) {
      newErrors.description = 'お問い合わせ内容'
      isValid = false
    }

    setErrors(newErrors);

    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };
  const postContactSubmission = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return
    }
    try {
      setLoading(true)
      let { message } = await API.post('idenbridjpcontactus', '/contactus', {
        body: contactData,
      })
      toast.success(message)
      setLoading(false)
      setContactData({
        inquiryMatter: '',
        companyName: '',
        inchargePerson: '',
        email: '',
        phoneNo: '',
        description: ''
      })
    } catch (error) {
      setLoading(false)
      console.log('error', error.message)
      toast.error('Submission failed. Please retry.')
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
        合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド
        </title>
        <meta
          name="description"
          content="“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。"
        />
      </Helmet>
      <section className="section-contact-us-page">
        <div className="contact-us-bg-img"></div>
        <PageHeader
          className="mx-auto"
          title="Contact US"
          subtext="お問い合わせ"
        />
        <div className="container p-0">
          <div className="contact-form-content">
            <div className="company-title">
              <h1>以下のフォームにご入力の上、送信をお願いします。</h1>
            </div>
            <div className="contact-form">
              <Form>
                <div className="contact-form-input">
                  <div className="input-label">
                    <label htmlFor="inquiry-info">お問い合わせ用件</label>
                    <span className="label-tag">必須</span>
                  </div>
                  <div className="form-input">
                    <Form.Control
                      as="select"
                      id="inquiry-info"
                      name='inquiryMatter'
                      value={contactData.inquiryMatter}
                      onChange={handleChange}
                      className={errors.inquiryMatter ? 'error-validation' : ''}
                    >
                      <option value="" disabled>
                        選択してください
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Control>
                    <span className="error">{errors.inquiryMatter}</span>
                  </div>
                </div>
                <div className="contact-form-input">
                  <div className="input-label">
                    <label htmlFor="business-name">企業名</label>
                    <span className="label-tag">必須</span>
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      value={contactData.companyName}
                      name="companyName"
                      id="business-name"
                      onChange={handleChange}
                      className={errors.companyName ? 'error-validation' : ''}
                    />
                    <span className="error">{errors.companyName}</span>
                  </div>
                </div>
                <div className="contact-form-input">
                  <div className="input-label">
                    <label htmlFor="name-of-person">ご担当者名</label>
                    <span className="label-tag">必須</span>
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      value={contactData.inchargePerson}
                      name="inchargePerson"
                      id="name-of-person"
                      onChange={handleChange}
                      className={errors.inchargePerson ? 'error-validation' : ''}
                    />
                    <span className="error">{errors.inchargePerson}</span>
                  </div>
                </div>
                <div className="contact-form-input">
                  <div className="input-label">
                    <label htmlFor="Email">メール</label>
                    <span className="label-tag">必須</span>
                  </div>
                  <div className="form-input">
                    <input 
                      type="email"
                      value={contactData.email}
                      name="email"
                      id="Email"
                      onChange={handleChange}
                      className={errors.email ? 'error-validation' : ''}
                    />
                    <span className="error">{errors.email}</span>
                  </div>
                </div>
                <div className="contact-form-input">
                  <div className="input-label">
                    <label htmlFor="phone-number">電話番号</label>
                    <span className="label-tag">abc</span>
                  </div>
                  <div className="form-input">
                    <input 
                      type="text"
                      value={contactData.phoneNo}
                      name="phoneNo"
                      id="phone-number"
                      onChange={handleChange}
                      className={errors.phoneNo ? 'error-validation' : ''}
                    />
                    <span className="error">{errors.phoneNo}</span>
                  </div>
                </div>
                <div className="contact-form-input">
                  <div className="input-label">
                    <label htmlFor="message">お問い合わせ内容</label>
                    <span className="label-tag">必須</span>
                  </div>
                  <div className="form-input">
                    <textarea 
                      type="text"
                      value={contactData.description}
                      name="description"
                      id="message"
                      onChange={handleChange}
                      className={errors.description ? 'error-validation' : ''}
                    />
                    <span className="error">{errors.description}</span>
                  </div>
                </div>
              </Form>
            </div>
            <div className="contact-agree-title">
              <p>
                次の「送信する」ボタンをクリックすることで、
                <Link to="/privacy" className="privacy-link">プライバシーポリシー </Link>
                に同意したことになります。
              </p>
            </div>
            <Button
              className="contact-form-submit-btn"
              variant="primary"
              disabled={isLoading}
              onClick={postContactSubmission}
            >
              {
                !isLoading ? 'ボタンラベル' :
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                  />
              }
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
