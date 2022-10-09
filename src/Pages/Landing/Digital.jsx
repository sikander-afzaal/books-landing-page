import "./styles/Digital.css";

const Digital = () => {
  return (
    <div className="digital">
      <img src="/assets/curve.png" alt="" className="curve" />
      <div className="abs-curve-text">
        <img src="/assets/study.png" alt="" />
        <div className="right-abs">
          <h2>開啟數位化的管理</h2>
          <div className="list">
            <p>
              <img src="/assets/tick.svg" alt="" />
              學習記錄數位化，查找好容易
            </p>
            <p>
              <img src="/assets/tick.svg" alt="" /> 家長學生 APP，聯繫好方便
            </p>
            <p>
              <img src="/assets/tick.svg" alt="" /> 線上書籍家教資源，成長好迅速
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
