import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_35oxcii", "template_yo3mj6f", form.current, {
        publicKey: "5MdCDZQtiI7gFLpND",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="pb-32">
      <div className="max-w-lg mx-auto p-8 bg-blue-900 rounded-3xl pb-10 shadow-xl mt-10">
        <h3 className="text-5xl font-bold text-center text-white mb-6">
          Contact Me
        </h3>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <label className="text-white">Name</label>
          <input
            className="p-2 rounded-lg text-lg font-normal text-black px-3 border border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <label className="text-white">Email</label>
          <input
            className="p-2 rounded-md text-black border text-lg border-gray-300 focus:outline-none focus:border-blue-500"
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <label className="text-white">Message</label>
          <textarea
            className="p-2 rounded-md border text-black text-lg border-gray-300 focus:outline-none focus:border-blue-500 h-32 resize-none"
            name="message"
            placeholder="Your Message"
            required
          />

          <input
            type="submit"
            value="Send"
            className="bg-blue-600 text-white  text-lg font-semibold py-2 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
