import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import Title from "./Title";
import Card from "./Card";

import "./HomePage.scss";

import dataFromJson from "../data/data";

const HomePage = () => {
  const history = useHistory();
  const data = dataFromJson;

  const onView = id => {
    history.push(`/product/${id}`);
  };

  const single = useMemo(() => {
    return data.map(text => <Card {...text} onView={onView} />);
  }, [data]);

  return (
    <div className="main-wrapper">
      <Title text={"Product List"} />
      <div className="product-list flex-grid">{single}</div>
    </div>
  );
};

export default HomePage;
