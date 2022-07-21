import type { NextPage } from "next";
import React, { useState, memo } from "react";

const RedBox = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: "red",
      }}
    ></div>
  );
};

export default memo(RedBox);
