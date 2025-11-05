"use client";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0B0C10] text-white px-4 md:px-8 md:gap-x-6 max-w-6xl mx-auto">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6 z-10"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-[#00FF88] drop-shadow-[0_0_8px_#00FF88]">
              Thong Thien
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl md:max-w-lg mx-auto md:mx-0">
            A passionate <b>Fullstack Developer</b> who loves building creative web apps, gaming,
            hitting the gym, and exploring new technologies.
          </p>

          {/* --- Personal Info --- */}
          <div className="text-gray-300 text-sm space-y-1 mt-4">
            <p><span className="text-[#00FF88] font-semibold">Full Name:</span> Nguyen Thong Thien</p>
            <p><span className="text-[#00FF88] font-semibold">Age:</span> 21</p>
            <p><span className="text-[#00FF88] font-semibold">Address:</span> Nha Trang, Khanh Hoa, Vietnam</p>
            <p><span className="text-[#00FF88] font-semibold">Phone:</span> 0772 438 318</p>
            <p><span className="text-[#00FF88] font-semibold">Email:</span> thongthien2004@gmail.com </p>
          </div>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 bg-[#00FF88] text-black font-semibold px-6 py-2 rounded-lg hover:bg-[#00cc66] transition"
          >
            View My Services
          </motion.a>
        </motion.div>

        {/* RIGHT — AVATAR */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#00FF88]/60 shadow-[0_0_30px_#00FF88]">
            <Image
              src="/assets/avtt.png"
              alt="Thong Thien"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ===== MY SERVICES ===== */}
      <section id="services" className="bg-[#0B0C10] text-white py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-[#00FF88]"
        >
          My Services
        </motion.h2>

        {/* --- IT RELATED --- */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-6 text-[#00FF88]/80 border-l-4 border-[#00FF88] pl-3">
            IT & Development
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Design"
              desc="Designing modern, responsive, and aesthetic websites focused on great user experience."
              icon="/assets/web-design.png"
            />
            <ServiceCard
              title="Fullstack Web Development"
              desc="Building dynamic applications using React, Next.js, Spring Boot, and MySQL."
              icon="/assets/webft.jpg"
            />
            <ServiceCard
              title="Software Development"
              desc="Designing and building reliable software systems with a focus on scalability, performance, and maintainability."
              icon="/assets/softwaredevelopment.png"
            />
            <ServiceCard
              title="AI & Computer Vision Applications"
              desc="Developing intelligent applications that integrate AI and computer vision for image recognition, automation, and data analysis."
              icon="/assets/ai.jpg"
            />

            <ServiceCard
              title="Support"
              desc="I provide comprehensive IT support, ensuring smooth operation and maintenance of computer systems, software, and networks."
              icon="/assets/supp.jpg"
            />
          </div>
        </div>

        {/* --- OTHER INTERESTS --- */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-[#00FF88]/80 border-l-4 border-[#00FF88] pl-3">
            Beyond IT
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="PR Game & Content Creation"
              desc="Running a gaming YouTube channel, creating content, and managing social media engagement."
              icon="/assets/gem.png"
            />
            <ServiceCard
              title="Personal Training & Gym"
              desc="Helping others stay fit and motivated through gym sessions and a healthy lifestyle mindset."
              icon="/assets/gym.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

/* ===== SERVICE CARD COMPONENT ===== */
function ServiceCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #00FF88" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-6 bg-[#0B0C10]/70 border border-[#00FF88]/40 rounded-xl shadow-lg hover:border-[#00FF88] hover:shadow-[#00FF88]/40 transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-4 relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      {/* Title & Desc */}
      <h4 className="text-lg font-semibold text-[#00FF88] mb-2">{title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

