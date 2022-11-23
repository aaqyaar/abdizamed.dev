import React from "react";
import { Button, TextField } from "components";
import { type TForm } from "components/TextField";
import { FormikProvider, Form, useFormik } from "formik";
import { contactValidationSchema } from "lib/utils";

export default function ContactForm({ onSubmit }: { onSubmit: any }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await onSubmit(values);
      setSubmitting(false);
      resetForm();
    },
  });

  const { getFieldProps, handleSubmit, errors, touched, isSubmitting } = formik;

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
            <Button
              type="submit"
              loading={isSubmitting}
              className="w-full md:w-auto"
            >
              Submit
            </Button>
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
    label: "Name *",
    component: "input",
  },
  {
    name: "email",
    type: "email",
    placeholder: "example@gmail.com",
    label: "Email *",
    component: "input",
  },
  {
    name: "phone",
    type: "text",
    placeholder: "+1234567890",
    label: "Phone *",
    component: "input",
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    label: "Subject *",
    component: "input",
  },
  {
    name: "message",
    type: "text",
    placeholder: "Message",
    label: "Message *",
    component: "textarea",
    rows: 4,
  },
];
