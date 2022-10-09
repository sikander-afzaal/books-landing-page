import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    service: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const changeHandler = (e) => {
    const inputName = e.target.name;
    setFormData((prev) => {
      return { ...prev, [inputName]: e.target.value };
    });
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const element = formData[key];
        if (element === "") {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }
    }
  };
  return (
    <div className="contact">
      <div className="max-cont">
        <form>
          <input
            onChange={changeHandler}
            name="name"
            value={formData.name}
            type="text"
            placeholder="姓名*"
          />
          <input
            onChange={changeHandler}
            value={formData.phone}
            name="phone"
            type="text"
            placeholder="電話*"
          />
          <input
            onChange={changeHandler}
            value={formData.email}
            name="email"
            type="text"
            placeholder="Email*"
          />
          <input
            onChange={changeHandler}
            value={formData.class}
            name="class"
            type="text"
            placeholder="學校／補習班名稱*"
          />
          <select
            onChange={changeHandler}
            value={formData.service}
            name="service"
          >
            <option value="選擇你感興趣的服務">選擇你感興趣的服務</option>
            <option value="選擇你感興趣的服務">選擇你感興趣的服務</option>
            <option value="選擇你感興趣的服務">選擇你感興趣的服務</option>
            <option value="選擇你感興趣的服務">選擇你感興趣的服務</option>
          </select>
          <textarea
            onChange={changeHandler}
            value={formData.message}
            name="message"
            placeholder="描述*"
          ></textarea>
          <button className={`${disabled ? "" : "disabled"}`}>送出</button>
        </form>
        <div className="contact-info">
          <h2>想要數位化經營，提供三位一體的服務給學生家長嗎？</h2>
          <div className="contacts">
            <a href="mailto:class@gmail.com">
              <img src="/assets/mail.png" alt="" /> class@gmail.com
            </a>

            <a href="tel:(02)32134324">
              <img src="/assets/phone.png" alt="" /> (02)32134324
            </a>
            <a href="#">
              <img src="/assets/location.png" alt="" />{" "}
              新北市中和區中豐路888巷66號
            </a>
          </div>
        </div>
      </div>
      <img src="/assets/girl.png" alt="" className="girl" />
    </div>
  );
};

export default Contact;
