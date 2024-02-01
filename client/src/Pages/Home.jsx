import { useState, useEffect } from "react";
import React from "react";
import { getTest } from "../functions/test";
export const Home = () => {
  const [data, setData] = useState("hii");
  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{data}</h1>Home
    </div>
  );
};
