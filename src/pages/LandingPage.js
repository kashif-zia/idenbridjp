import { useEffect } from "react";
import Banner from "components/Home/Banner/Banner.js";
import About from "components/Home/About/About.js";
import Services from "components/Home/Services/Services";
import DigitalPeer from "components/DigitalPeer/DigitalPeer.js";
import Calltoaction from "components/CalltoAction/calltoaction.js";
import Aboutcompany from "components/Home/AboutCompany/aboutcompany.js";
import News from "components/Home/News/News.js";
import Blog from "components/Home/Blog/Blog.js";
import UpdateFutureMarquee from "components/Home/UpdateFuture/updatefuture.js";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div>
      <Helmet>
        <title>
        合同会社アイデンブリッド | IDENBRID INC. | アプリ、システム開発、AWSクラウド
        </title>
        <meta
          name="description"
          content="“未来をテクノロジーでカッコよくアップデート”をスローガンにAWSクラウド環境にて、高機能なモバイル、スマホ・タブレットアプリそしてWebアプリケーション、業務システム開発、UIUXデザイン設計を高品質にて、お客様の納期内にそして開発費用もご予算に合わせご提供しています。"
        />
      </Helmet>
      <section className="home-page">
        <div className="home-bg"></div>
        <Banner />
        <About />
        <Services />
        <Container fluid>
          <div className="lp-digitalpeer-wrapper">
            <DigitalPeer />
          </div>
        </Container>
        <UpdateFutureMarquee />
        <Aboutcompany />
        <Blog />
        <News />
        <Calltoaction />
      </section>
    </div>
  );
}
