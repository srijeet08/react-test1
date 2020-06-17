import React from "react";
import Navbar from "./Navbar";

const withLayout = C => () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <C />
      </div>
    </>
  );
};

export default withLayout;
