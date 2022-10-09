import "./styles/Partner.css";

const Partner = () => {
  return (
    <div className="partner">
      <div className="top-partner">
        <div>
          <h1 className="heading">提供豐富學習資源的夥伴</h1>
          <h2 className="sub">
            多元且優惠的實體教材及免費課外電子書，輔助教育機構提供學生完整學習資源！
          </h2>
        </div>
        <img src="/assets/home-together.png" alt="" />
      </div>
      <div className="bottom-partner">
        <div className="partner-box">
          <img src="/assets/partner (2).png" alt="" />
          <h3>實體教科書購買</h3>
          <p>提供國高中小各年級教科書</p>
        </div>
        <div className="partner-box">
          <img src="/assets/partner (3).png" alt="" />
          <h3>豐富的課外電子書</h3>
          <p>超過1000本課外電子書可閱讀</p>
        </div>
        <div className="partner-box">
          <img src="/assets/partner (1).png" alt="" />
          <h3>跨裝置閱讀</h3>
          <p>手機、平版、電腦皆可使用</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
