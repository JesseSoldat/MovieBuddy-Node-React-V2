import React from "react";
import isEmpty from "../utils/isEmpty";

const SingleField = ({ field, value }) => {
  const content = isEmpty(value) ? (
    <li className="pb-3 list-group-item">
      <strong className="pr-3">{field}: </strong>
      <br /> {field} is not set yet
    </li>
  ) : (
    <li className="pb-3 list-group-item">
      <strong className="pr-3">{field}: </strong>
      <br /> {value}
    </li>
  );

  return content;
};

export default SingleField;
