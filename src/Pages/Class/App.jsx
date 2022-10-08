import "./styles/App.css";

const App = () => {
  return (
    <div style={{ backgroundColor: "var(--green)" }} className="app">
      <img src="/assets/app.png" alt="" />
      <div className="right-app">
        <h2>減輕你的管理負擔</h2>
        <h3>釋放你在班級管理上的一切煩惱！</h3>
        <div className="btn-div">
          <button className="cta">企業版</button>
          <button className="store">
            <img src="/assets/play.png" alt="" />
            <div>
              <h4>Google Play</h4>
              <p>立即下載</p>
            </div>
          </button>
          <button className="store">
            <img src="/assets/apple.png" alt="" />
            <div>
              <h4>App Store</h4>
              <p>立即下載</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
