import React, { useState } from "react";
import creditCardType from "credit-card-type";
import "../../assets/css/style.css";

const Card = ({ namePage, name, numberCard, btnSubmitName, infoCheck }) => {
  const [ccNumber, setCcNumber] = useState("");
  const [ccType, setCcType] = useState("");

  const handleCcInputChange = (event) => {
    const number = event.target.value;
    setCcNumber(number);

    const type = creditCardType(number);
    if (!number.length || !type.length) {
      setCcType("");
    } else {
      setCcType(type[0].type);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o envio do formulário

    // Verifica se todos os campos estão preenchidos
    const form = event.target;
    const name = form.name.value;
    const ccMonth = form.cc_month.value;
    const ccYear = form.cc_year.value;
    const ccCvc = form.cc_cvc.value;
    const saveCc = form.save_cc.checked;

    if (name && ccNumber && ccMonth && ccYear && ccCvc && ccType && saveCc) {
      console.log("Todos os dados estão corretos!");

      console.log("==============================");
      const data = {
        name: name,
        ccNumber: ccNumber,
        ccMonth: ccMonth,
        ccYear: ccYear,
        ccCvc: ccCvc,
        ccType: ccType,
      };

      console.log("Seus dados: ", data);
      // Aqui você pode adicionar a lógica para enviar os dados
    } else {
      console.log("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__featured">
            <button type="button" className="button--transparent button--close">
              <svg
                className="nc-icon glyph"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <g>
                  <path
                    fill="#ffffff"
                    d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"
                  ></path>
                </g>
              </svg>
              <span className="visuallyhidden">
                Retornar para a página do produto
              </span>
            </button>
            <div className="modal__circle"></div>
            <img
              src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png"
              className="modal__product"
              alt="Product"
            />
          </div>
          <div className="modal__content">
            <h2>{namePage}</h2>

            <form onSubmit={handleSubmit}>
              <ul className="form-list">
                <li className="form-list__row">
                  <label>{name}</label>
                  <input type="text" name="name" required />
                </li>
                <li className="form-list__row">
                  <label>{numberCard}</label>
                  <div
                    id="input--cc"
                    className={`creditcard-icon creditcard-icon--${ccType}`}
                  >
                    <input
                      type="text"
                      name="cc_number"
                      value={ccNumber}
                      onChange={handleCcInputChange}
                      required
                    />
                  </div>
                </li>
                <li className="form-list__row form-list__row--inline">
                  <div>
                    <label>Data de expiração</label>
                    <div className="form-list__input-inline">
                      <input
                        type="text"
                        name="cc_month"
                        placeholder="MM"
                        // pattern="\\d*"
                        minLength="2"
                        maxLength="2"
                        required
                      />
                      <input
                        type="text"
                        name="cc_year"
                        placeholder="YY"
                        // pattern="\\d*"
                        minLength="2"
                        maxLength="2"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label>
                      CVC
                      <a
                        href="#cvv-modal"
                        className="button--transparent modal-open button--info"
                      >
                        <svg
                          className="nc-icon glyph"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            {" "}
                            <path
                              fill="#35a4fb"
                              d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,13c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1 C9,12.6,8.6,13,8,13z M9.5,8.4C9,8.7,9,8.8,9,9v1H7V9c0-1.3,0.8-1.9,1.4-2.3C8.9,6.4,9,6.3,9,6c0-0.6-0.4-1-1-1 C7.6,5,7.3,5.2,7.1,5.5L6.6,6.4l-1.7-1l0.5-0.9C5.9,3.6,6.9,3,8,3c1.7,0,3,1.3,3,3C11,7.4,10.1,8,9.5,8.4z"
                            ></path>{" "}
                          </g>
                        </svg>
                        <span className="visuallyhidden">Qual é o CVV?</span>
                      </a>
                    </label>
                    <input
                      type="text"
                      name="cc_cvc"
                      placeholder="123"
                      //   pattern="\\d*"
                      minLength="3"
                      maxLength="4"
                      required
                    />
                  </div>
                </li>
                <li className="form-list__row form-list__row--agree">
                  <input type="checkbox" name="save_cc" defaultChecked />
                  <label>{infoCheck}</label>
                </li>
                <li>
                  <button type="submit" className="button">
                    {btnSubmitName}
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
