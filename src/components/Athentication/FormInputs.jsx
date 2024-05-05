import React from "react";
import { FormInput } from "../../static/CSS/Style";
export const FormInputs = ({ type, name, value, onChange }) => {
  return (
    <div>
      <FormInput type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};
