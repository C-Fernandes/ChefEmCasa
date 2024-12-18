import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/footer";
import useFetch from "../hooks/UseFetch";
function Home() {
  return (
    <>
      <Menu />
      <h1>Hello world!</h1>
      <Footer />
    </>
  );
}
export default Home;
