import "./Footer.css";

const Footer = () => {
  return (
    <div className="container foot-wrap">
      <img
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        src="/assets/arrow-up.png"
        alt=""
        className="scroll-up"
      />
      <footer>
        <div>
          <img src="/assets/logo.png" alt="" />
          <p>Copyright ©Class Ltd. 2022</p>
        </div>
        <div className="right-footer">
          <div className="foot-col">
            <h2>產品與服務</h2>
            <a href="#">CLASS 班級</a>
            <a href="#">CLASS 家教</a>
            <a href="#">CLASS 書店</a>
          </div>
          <div className="foot-col">
            <h2>關於 Class</h2>
            <a href="#">關於我們</a>
            <a href="#">服務與願景</a>
            <a href="#">聯絡我們</a>
          </div>
          <div className="foot-col">
            <h2>追蹤我們</h2>
            <div className="social-div">
              <a href="#">
                <img src="/assets/line.png" alt="" />
              </a>
              <a href="#">
                <img src="/assets/fb.png" alt="" />
              </a>
              <a href="#">
                <img src="/assets/ig.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
