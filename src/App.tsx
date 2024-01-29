// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Routes, Route } from "react-router-dom";
// import { GlobalProvider } from "@/contexts";
import "@fortawesome/fontawesome-svg-core/styles.css";
// import {
//   CoinList,
//   CoinPage,
//   Portfolio,
//   ErrorAPICallPage,
//   SearchPage,
// } from "@/pages";
import { Header } from "@/components";
// import { GlobalStyle, Wrapper } from "@/styles";
import {  Wrapper } from "@/styles";
// import { setMobile } from "@/modernStore/features/mobile/mobileSlice";

const App = () => {
  return (
      <Wrapper>
        <Header />
      </Wrapper>
        
  );
};

export default App;