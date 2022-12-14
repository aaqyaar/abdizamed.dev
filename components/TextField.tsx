import React from "react";

export type TForm = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  getFieldProps?: any;
  error?: string;
  className?: string;
  rows?: number;
  // This is a boolean that will be used to determine if the input field is required or not.
  // If the input field is required, then the label will be appended with an asterisk.
  required?: boolean;

  disabled?: boolean;

  component?: string;

  errors?: any;
  touched?: any;
};

export default function TextField({
  label,
  placeholder,
  type,
  name,
  getFieldProps,

  className,
  required,
  rows,
  disabled,
  component,
  errors,
  touched,
}: TForm) {
  return (
    <>
      <label htmlFor={name} className="label">
        {label}
      </label>
      {required && <span className="text-red-500">*</span>}
      {component === "textarea" ? (
        <textarea
          placeholder={placeholder}
          type={type}
          name={name}
          id={name}
          rows={rows}
          className={`textfield ${className}`}
          {...getFieldProps(name)}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...getFieldProps(name)}
          className={`textfield ${className}`}
          disabled={disabled}
          required={required}
        />
      )}

      {errors[name] && (
        <p className="error pt-2">
          {errors[name] && touched[name] && errors[name]}
        </p>
      )}
    </>
  );
}
