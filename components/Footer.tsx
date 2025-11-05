"use client";
import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] text-white py-16 px-6 md:px-12 border-t border-[#00FF88]/30 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* LEFT — MESSAGE FORM */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            <span className="text-white">LEAVE US </span>
            <span className="text-[#00FF88]">MESSAGE</span>
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-sm">
                <span className="text-red-500">*</span> Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#1A1A1A] text-white px-4 py-2 rounded-md border border-[#00FF88]/40 focus:border-[#00FF88] outline-none transition"
              />
              </div>
              <div>
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-[#1A1A1A] text-white px-4 py-2 rounded-md border border-[#00FF88]/40 focus:border-[#00FF88] outline-none transition"
              />
              </div>
              <div>
              <label className="block mb-1 font-medium text-sm">Your Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-[#1A1A1A] text-white px-4 py-2 rounded-md border border-[#00FF88]/40 focus:border-[#00FF88] outline-none transition resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#00FF88] text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#00cc66] transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* RIGHT — CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            <span className="text-[#00FF88]">CONTACT</span>{" "}
            <span className="text-white">ME</span>
          </h2>

          <ul className="space-y-5 text-gray-300">
            <li className="flex items-center gap-4">
              <FaHome className="text-[#00FF88] text-xl" />
              <span>24/6 Nguyen Dinh Chieu, Nha Trang, Khanh Hoa</span>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-[#00FF88] text-xl" />
              <a
                href="mailto:thongthien2004@gmail.com"
                className="hover:text-[#00FF88]"
              >
                thongthien2004@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#00FF88] text-xl" />
              <a href="tel:0123344566" className="hover:text-[#00FF88]">
                0772438318
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaGithub className="text-[#00FF88] text-xl" />
              <a
                href="https://github.com/thongthien"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00FF88]"
              >
                github.com/thongthien
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaLinkedin className="text-[#00FF88] text-xl" />
              <a
                href="https://linkedin.com/in/thongthien"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00FF88]"
              >
                linkedin.com/in/thongthien
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaYoutube className="text-[#00FF88] text-xl" />
              <a
                href="https://www.youtube.com/@neihtNRO/featured"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00FF88]"
              >
                youtube.com/@neihtNRO
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-500 text-xs mt-12">
        © {new Date().getFullYear()} Thong Thien. All rights reserved.
      </p>
    </footer>
  );
}
