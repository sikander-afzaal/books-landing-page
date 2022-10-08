import "./styles/Provide.css";

const ProvideRow = ({ img, head, desc }) => {
  return (
    <div className="provide-row">
      <img src={img} alt="" />
      <div className="text-col">
        <h3>{head}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Provide = () => {
  const DATA = [
    {
      img: "/assets/provide-ico (3).png",
      head: "點名出勤",
      desc: "直接點名或請假",
    },
    {
      img: "/assets/provide-ico (1).png",
      head: "班級相簿紀錄",
      desc: "建立班級回憶相簿",
    },
    {
      img: "/assets/provide-ico (5).png",
      head: "成績紀錄",
      desc: "各科目成績紀錄",
    },
    {
      img: "/assets/provide-ico (2).png",
      head: "收費財務",
      desc: "方便老師快速且彈性建立課表",
    },
    {
      img: "/assets/provide-ico (6).png",
      head: "數位聯絡簿",
      desc: "重要待辦、考試項目紀錄",
    },
    {
      img: "/assets/provide-ico (4).png",
      head: "人事管理",
      desc: "所有班級歷史紀錄皆留存於系統",
    },
  ];
  return (
    <div className="provide">
      <h1 className="heading">提供教師所需教育溝通以及數位化經營工具</h1>
      <h2 className="sub">
        CLASS班級紀錄學生學習狀況並作為與家長學生溝通工具，讓校方及教師下班生活有品質。
      </h2>
      <div className="provide-box">
        <hr />
        {DATA.map((elem, idx) => {
          return <ProvideRow {...elem} key={"provide" + idx} />;
        })}
      </div>
    </div>
  );
};

export default Provide;
