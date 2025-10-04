import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactForm() {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent successfully.",
            showConfirmButton: false,
            timer: 1500,
            background: "linear-gradient(to right, #4c1d95, #312e81, #1e3a8a)", // matches your Tailwind gradient
            color: "#fff", // makes text readable
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.text,
            showConfirmButton: false,
            timer: 1500,
            background: "linear-gradient(to right, #4c1d95, #312e81, #1e3a8a)", // matches your Tailwind gradient
            color: "#fff", // makes text readable
          });
        }
      );
  };

  return (
    <div className="md:w-6xl mx-auto px-5 md:px-0 text-white mt-16 mb-10">
      <div className="text-center">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Us
          </span>
        </h2>
      </div>
      <div className="mx-auto grid gap-10 md:grid-cols-2 items-center justify-center">
        {/* Form Section */}
        <div className="rounded-lg">
          <h2
            data-aos="fade-right"
            className="text-xl font-semibold text-blue-500 mb-3"
          >
            Get In Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              data-aos="zoom-in-left"
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
              required
            />
            <input
              data-aos="zoom-in-left"
              type="email"
              name="user_email"
              placeholder="example@yourmail.com"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
              required
            />
            <textarea
              data-aos="zoom-in-left"
              rows="6"
              name="message"
              placeholder="Type your message..."
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
              required
            ></textarea>
            <button
              data-aos="zoom-in-left"
              type="submit"
              className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 cursor-pointer px-6 py-2 rounded-lg transition-all duration-200"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div data-aos="fade-right" className="space-y-6 text-sm">
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Fill out the form below
            and we’ll get back to you as soon as possible.
          </p>

          {/* Email & WhatsApp */}
          <div className="grid col-end-1 md:grid-cols-2 gap-4">
            <div
              data-aos="zoom-in-left"
              className="flex items-center space-x-3"
            >
              <FaPhoneAlt className="text-xl" />
              <span>+8801727841588</span>
            </div>
            <div
              data-aos="zoom-in-left"
              className="flex items-center space-x-3"
            >
              <FaEnvelope className="text-white text-xl" />
              <a
                href="mailto:mdsaifulsaif.dev@gmail.com"
                className="hover:text-white"
              >
                mdsaifulsaif.dev@gmail.com
              </a>
            </div>
            <div
              data-aos="zoom-in-left"
              className="flex items-center space-x-3"
            >
              <FaWhatsapp className=" text-xl" />
              <a
                href="https://wa.me/8801727841588"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp Chat
              </a>
            </div>
            <div
              data-aos="zoom-in-left"
              className="flex items-center space-x-3"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6"></div>
        </div>
      </div>
    </div>
  );
}
