import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

function CustomDropdown(props) {
  const { label, name, options, defaultValue, ...rest } = props;

  return (
    <div className="mt-2 space-y-1 w-full">
      <label htmlFor={name} className="text-sm block">
        {label}
      </label>
      <Field
        as="select"
        name={name}
        className="max-w-[392px] w-full p-1 md:p-2 border rounded-md border-[#D0D5DD]"
        {...rest}
      >
        <option value="" disabled>
          {defaultValue || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CustomDropdown;
