import { useRef } from "react";
import Container from "./layout/Container";
import Heading from "./layout/Heading";
import emailjs from "@emailjs/browser";

const Contact = ({ contactref }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c2iyd3n",
      "template_6aqisih",
      form.current,
      "HyRNy7XDkagpSYPAr"
    ).then(
        () => {
            alert("Email Send Successfully !")
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section ref={contactref} className="lg:pt-32 pt-20">
      <Container>
        <Heading title="CONTACTS" />
        <div className="flex justify-center mt-12 lg:mt-20">
          <div className="w-[500px] flex flex-col">
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="w-full border-[2px] rounded h-16 border-secondary bg-transparent p-3 text-white text-2xl font-po placeholder:text-[#D9D9D94D] placeholder:font-light placeholder:text-lg"
                type="text"
                name="user_name"
                placeholder="Your name"
              />
              <input
                className="w-full border-[2px] rounded h-16 border-secondary bg-transparent p-3 text-white text-2xl font-po my-7 placeholder:text-[#D9D9D94D] placeholder:font-light placeholder:text-lg"
                type="email"
                name="user_email"
                placeholder="Your email"
              />
              <textarea
                className="w-full border-[2px] rounded h-32 border-secondary bg-transparent p-3 text-white text-2xl font-po placeholder:text-[#D9D9D94D] placeholder:font-light placeholder:text-lg"
                name="message"
                placeholder="Message"
              />
              <input
                className="w-full cursor-pointer bg-secondary text-primary font-po font-semibold text-2xl py-4 rounded mt-7"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
