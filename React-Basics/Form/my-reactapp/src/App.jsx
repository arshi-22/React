import React from "react";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Hooks } from "./components/Hooks_usecases/Hooks";
import { DynamicTheme } from "./components/context/DynamicTheme";
// import "./index.css";
import FormValidation from "./components/form/FormValidation";

function App() {
  return (
    <>
      {/* <DynamicTheme>
        <Header />
        <Card />
        <Footer />
        <Hooks />
      </DynamicTheme> */}
      <FormValidation />
    </>
  );
}

export default App;
