import "./styles/About.css";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div className="about">
      <img src="/assets/bg-book.svg" alt="" className="book" />
      <img src="/assets/bg-trophy.svg" alt="" className="trophy" />
      <div className="max-cont">
        <Fade top>
          <h1>關於我們</h1>
        </Fade>
        <div>
          <div id="about" className="func-row">
            <Fade left>
              <img src="/assets/home-photo1.png" alt="" />
            </Fade>
            <div>
              <Fade cascade right>
                <h2>關於CLASS</h2>
                <p>
                  畢奶奶和她的大象有多麼醒目，就有多麼的被人們無視。也許，這樣龐大的身影，只是想提醒我們，記得在日常雜亂奔忙的心中，理出一小塊柔軟的角落，安放那些微不足道，卻又巨大無比的小小幸福。
                  畢奶奶和她的寵物大畢奶奶和她的大象有多麼醒目，就有多麼的被人們無視。也許，這樣龐大的身影，只是想提醒我們，記得在日常雜亂奔忙的心中，理出一小塊柔軟的角落，安放那些微不足道，卻又巨大無比的小小幸福。
                  畢奶奶和她的寵物大。。
                </p>
              </Fade>
            </div>
          </div>
          <div id="service" className="func-row">
            <Fade right>
              <img src="/assets/home-photo2.png" alt="" />
            </Fade>
            <div>
              <Fade left cascade>
                <h2>服務與願景</h2>
                <p>
                  畢奶奶和她的大象有多麼醒目，就有多麼的被人們無視。也許，這樣龐大的身影，只是想提醒我們，記得在日常雜亂奔忙的心中，理出一小塊柔軟的角落，安放那些微不足道，卻又巨大無比的小小幸福。
                  畢奶奶和她的寵物大畢奶奶和她的大象有多麼醒目，就有多麼的被人們無視。也許，這樣龐大的身影，只是想提醒我們，記得在日常雜亂奔忙的心中，理出一小塊柔軟的角落，安放那些微不足道，卻又巨大無比的小小幸福。
                  畢奶奶和她的寵物大。。
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
