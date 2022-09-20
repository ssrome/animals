import React from "react";

export default function Name({ name, latinName }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{latinName}</h3>
    </>
  );
}
