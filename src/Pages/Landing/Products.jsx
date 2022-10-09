import { Link } from "react-router-dom";
import "./styles/Producs.css";

const Products = () => {
  return (
    <div className="products">
      <h3>我們的產品</h3>
      <h2>專為跨世代打造數位學習產品</h2>
      <div className="product-row">
        <div className="product-box">
          <img src="/assets/home.png" alt="" />
          <h1>CLASS 班級</h1>
          <p>
            協助從管理師生排班到開單收費等 ERP 工具到師生及家長溝通聯繫 CRM
            ，幫助您有效節省管理成本，專注提高教學及生活品質。
          </p>
          <Link to={"/class"}>瞭解更多</Link>
        </div>
        <div className="product-box">
          <img src="/assets/pencil.png" alt="" />
          <h1>CLASS 家教</h1>
          <p>
            24HR
            提供學生課業遇到困難時即時發問的平台，幫助學習機構節省娉顧解題老師成本且可提供課後協助。
          </p>
          <Link to={"/tutor"}>瞭解更多</Link>
        </div>
        <div className="product-box">
          <img src="/assets/book.png" alt="" />
          <h1>CLASS 書店</h1>
          <p>
            提供教科書最優惠的價格及豐富多樣的課外電子書，滿足孩子在學習過程中所有書籍。
          </p>
          <Link to={"/bookstore"}>瞭解更多</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
