import "./App.css";

const App = ({ bg, img, head1, head2, btnText, btnColor }) => {
  return (
    <div style={{ backgroundColor: bg }} className="app">
      <img src={img} alt="" />
      <div className="right-app">
        <h2>{head1}</h2>
        <h3>{head2}</h3>
        <div className="btn-div">
          <button style={{ backgroundColor: btnColor[0] }} className="cta">
            {btnText}
          </button>
          <button style={{ backgroundColor: btnColor[1] }} className="store">
            <img src="/assets/play.png" alt="" />
            <div>
              <h4>Google Play</h4>
              <p>立即下載</p>
            </div>
          </button>
          <button style={{ backgroundColor: btnColor[1] }} className="store">
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
