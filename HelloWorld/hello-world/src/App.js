import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { Component } from "react";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Form from "./components/form";
import LifeCycleA from "./components/lifeCycle/lifecyclea";
import FragmentDemo from "./components/fragment";
import Table from "./components/fragment/table";
import ParentComp from "./components/purecomponent/ParentComp";
import FRParentInput from "./functionalComponent/reactHook/forwardRef/FRParentInput";
import Counter from "./functionalComponent/reactHook/renderProp/counter";
import ClickCounter from "./functionalComponent/reactHook/renderProp/clickCounter";
import HoverCounter from "./functionalComponent/reactHook/renderProp/hoverCounter";


  const App = () =>{
    return (
      <div className="App">
        {/* <Message></Message>
        <Greet name="Arshima" fullName="ArshimaSagunan"> <p>This is children props</p> </Greet>
         <Welcome name="Arshi"/>
        <Hello></Hello> */}
        {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/* <FragmentDemo /> */}
        {/* <ParentComp />
        <FRParentInput /> */}
        {/* <Table /> */}
        <Counter
          render={(count, incrementCount) => {
            <ClickCounter count={2} incrementCount={2} />;
          }}
        />
        <Counter
          render={(count, incrementCount) => {
            <HoverCounter count={count} incrementCount={incrementCount} />;
          }}
        />
      </div>
    );
  }

export default App;
