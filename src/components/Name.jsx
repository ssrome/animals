import React from "react";

export default function Name({ name, latinName }) {
  if (name && latinName) {
    return (
      <>
        <h2 data-cy="name-heading">{name}</h2>
        <h3 data-cy="latin-name-heading">{latinName}</h3>
      </>
    );
  } else {
    return;
    <></>;
  }
}
