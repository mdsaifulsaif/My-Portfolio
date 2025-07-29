import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactForm() {
  return (
    <div className="md:w-6xl mx-auto  px-5 md:px-0  text-white  mt-16 mb-10  ">
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Contact{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Us
          </span>
        </h2>
      </div>
      <div className=" mx-auto  grid gap-10 md:grid-cols-2  items-center justify-center">
        {/* Form Section */}
        <div className=" rounded-lg ">
          <h2 className="text-xl font-semibold text-blue-500  mb-3">
            Get In Touch
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="example@yourmail.com"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
            <textarea
              rows="6"
              placeholder="Type your message..."
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 outline-none"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 cursor-pointer px-6 py-2 rounded-lg transition-all duration-200">
              Send Now
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6 text-sm">
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Fill out the form below
            and we’ll get back to you as soon as possible.
          </p>

          {/* Email & WhatsApp */}

          <div className="grid col-end-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-xl" />
              <span>+8801727841588</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-white text-xl" />
              <a
                href="mailto:mdsaifulsaif.dev@gmail.com"
                className="hover:text-white"
              >
                mdsaifulsaif.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
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
            <div className="flex items-center space-x-3">
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
