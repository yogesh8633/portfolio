import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FIELDS } from "./utils/constant";

let schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email(),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Characters should be more than 10!"),
});

const ContactUs = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const onSubmit = data => console.log(data);
  console.log(errors);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit(() => {
      emailjs
        .sendForm(
          "service_n201y33",
          "template_07cu75u",
          form.current,
          "Z7urzuKCEb4JnRVYr"
        )
        .then(
          () => {
            Swal.fire("Sent", "Your Message has been sent!!", "success");
            reset({
              name: "",
              email: "",
              message: "",
              subject: "",
            });
          },
          (error) => {
            Swal.fire("Error", "Try Again after some time!", "error");
            console.log(error.text, "..... error");
          }
        );
    })();
  };
  return (
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs"></span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>RZ-42A Street No. 2A Durga Park Sec 1A Dwarka New Delhi-45</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <a href="tel://9711708633">+91-9711708633</a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <a href="mailto:yogeshg9711@gmail.com">yogeshg9711@gmail.com</a>
              </p>
            </div>  
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-animate">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-globe"></span>
              </div>
              <h3 className="mb-4">Website</h3>
              <p>
                <a href="https://yogeshportfolio.vercel.app/" target="_blank" rel="noreferrer">YOGESH-PORTFOLIO</a>
              </p>
            </div>
          </div>
        </div>

        <div className="row no-gutters block-9 d-flex justify-content-center">
          <div className=" order-md-last " style={{width:"70%"}}>
            <form
              ref={form}
              onSubmit={(e) => handleOnSubmit(e)}
              className="bg-light p-4 p-md-5 contact-form"
            >
              {FIELDS.map((item, index) => (
                <div className="mb-2" key={index}>
                  <input
                    type={item.type}
                    placeholder={`Enter ${item.label}`}
                    name={item.key}
                    className={`form-control ${
                      errors[item.key] ? "in-valid" : ""}`}
                    {...register(item.key)}
                  />
                  {
                    <small className="text-danger">
                      {errors?.[item.key]?.message}
                    </small>
                  }
                </div>
              ))}
              <input type="submit" value="Submit" className="btn btn-success" />
            </form>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
