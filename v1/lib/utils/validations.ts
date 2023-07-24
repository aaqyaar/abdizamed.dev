import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});
