import {
  FaLocationArrow,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { useState } from "react";

const Footer = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setButtonText("Submitting...");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xvgoezez", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setButtonText("Message Sent!");
        event.target.reset();
      } else {
        setButtonText("Failed. Try Again.");
        console.error("Form submission failed:", await response.json());
      }
    } catch (error) {
      setButtonText("Error. Try Again.");
      console.error("Error submitting form:", error);
    } finally {
      setTimeout(() => {
        setButtonText("Send Message");
        setIsSubmitting(false);
      }, 3000);
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative">
      <div id="contact" className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Apply <span className="text-purple">Now</span>
        </h1>
        <form
          className="w-full max-w-lg mt-10 p-6 rounded-lg flex flex-col items-center"
          onSubmit={handleFormSubmit}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <div className="mb-4 w-full">
            <label className="block text-sm text-white mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-black-300 rounded-md text-white focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-black-300 rounded-md text-white focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 bg-black-300 rounded-md text-white focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <MagicButton
              title={buttonText}
              icon={isSubmitting ? null : <FaLocationArrow />}
              position="right"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 METAMAD
        </p>

        <div className="flex items-center md:gap-3 gap-6 relative z-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaFacebook className="text-white text-xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaTwitter className="text-white text-xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex justify-center items-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
