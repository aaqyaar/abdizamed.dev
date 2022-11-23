import React from "react";
import { TextField } from "components";
import { type TForm } from "components/TextField";
import { FormikProvider, Form, useFormik } from "formik";
import { contactValidationSchema } from "lib/utils";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { getFieldProps, handleSubmit, errors, touched } = formik;
  console.log(errors);
  return (
    <FormikProvider value={formik}>
      <div className="col-span-2">
        <Form
          onSubmit={handleSubmit}
          noValidate
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {formFields.map((form: TForm, i) => {
            return (
              <div className="col-span-2" key={i}>
                <TextField
                  {...form}
                  getFieldProps={getFieldProps}
                  errors={errors}
                  touched={touched}
                />
              </div>
            );
          })}

          <div className="col-span-2 flex items-center justify-end">
            <button
              type="submit"
              className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
              // disabled={false}
            >
              Send
            </button>
          </div>
        </Form>
      </div>
    </FormikProvider>
  );
}

const formFields: TForm[] = [
  {
    name: "name",
    type: "text",
    placeholder: "John Doe",
    label: "Name",
    component: "input",
  },
  {
    name: "email",
    type: "email",
    placeholder: "example@gmail.com",
    label: "Email",
    component: "input",
  },
  {
    name: "phone",
    type: "text",
    placeholder: "+1234567890",
    label: "Phone",
    component: "input",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    label: "Subject",
    component: "input",
  },
  {
    name: "message",
    type: "text",
    placeholder: "Message",
    label: "Message",
    component: "textarea",
    rows: 4,
  },
];
