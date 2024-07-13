import React, { useEffect, useState } from "react";
import "./style.css";

export default function FormValidation() {
  const [productDetails, setProductDetails] = useState({
    name: "",
    quantity: 0,
  });
  const [error, setError] = useState({
    name: false,
    quantity: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setProductDetails({ ...productDetails, name: value });
      setError({ ...error, name: false });
    } else {
      setProductDetails({ ...productDetails, quantity: value });
      setError({ ...error, quantity: false });
    }
  };
  useEffect(() => {
    document
      .getElementsByClassName("section")[0]
      .addEventListener("click", () => {
        if (productDetails.name === "") {
          productDetails.quantity === 0
            ? setError({ name: true, quantity: true })
            : setError({ name: true, quantity: false });
        } else if (productDetails.quantity === 0) {
          setError({ name: false, quantity: true });
        } else {
          setError({ name: false, quantity: false });
        }
      });
  });

  return (
    <div className="container">
      <section className="section">
        <form className="layout" noValidate>
          <label>
            <input
              className="inputFiled"
              type="text"
              name="name"
              placeholder="Product name"
              onInput={handleInputChange}
              onBlur={null}
            />
          </label>
          {error.name && <p className="error-text">Product name is required</p>}

          <label>
            <input
              type="number"
              name="quantituy"
              placeholder="Quantity"
              onInput={handleInputChange}
              onBlur={null}
              className="inputFiled"
            />
          </label>
          {error.quantity && <p className="error-text">Quantity is required</p>}
          <button
            className="submit"
            disabled={error.name || error.quantity}
            onClick={null}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
