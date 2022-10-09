import "./styles/Hero.css";

const Hero = () => {
  return (
    <div className="max-cont">
      <div className="landing-hero">
        <div className="left-hero">
          <h1>教育界數位推手</h1>
          <p>
            從師生及家長溝通 CRM 結合數位經營 ERP 工具、實體教材及數位學習資源到
            24HR
            家教協助，幫助您系統化管理每一位學生及家長，同時提供給學生更多元的學習及家教資源！
          </p>
          <a href="#products" className="cta-btn">
            了解產品
          </a>
        </div>
        <img src="/assets/landing-hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
