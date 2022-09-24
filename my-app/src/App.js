import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Head></Head>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
