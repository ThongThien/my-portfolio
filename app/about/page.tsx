"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <>
    <section className="min-h-screen bg-[#0B0C10] text-white px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        {/* ===== TOP SECTION: AVATAR + BASIC INFO ===== */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
          {/* Left - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#00FF88]/60 shadow-[0_0_25px_#00FF88]">
              <Image
                src="/assets/avtt.png"
                alt="Nguyen Thong Thien"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-3"
          >
            <h1 className="text-3xl font-bold text-[#00FF88] mb-4 drop-shadow-[0_0_8px_#00FF88]">
              NGUYEN THONG THIEN
            </h1>
            <p className="text-gray-300">
              🎓 <b>Fourth-year IT Student</b> at Nha Trang University
            </p>
            <p className="text-gray-300">📍 Nha Trang, Khanh Hoa, Vietnam</p>
            <p className="text-gray-300">📧 thongthien2004@gmail.com</p>
            <p className="text-gray-300">📞 0772 438 318</p>
          </motion.div>
        </div>

        {/* ===== SECTIONS BELOW ===== */}
        <div className="space-y-12 text-gray-300 leading-relaxed">

          {/* 🌱 About Me */}
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-[#00FF88] mb-6">
            🎓 Education & Skills
          </h2>

          {/* Education */}
          <div className="bg-[#0B0C10]/70 border border-[#00FF88]/40 rounded-xl p-6 mb-8 shadow-[0_0_20px_#00FF88]/10">
            <h3 className="text-xl font-semibold text-[#00FF88] mb-2">
              Nha Trang University
            </h3>
            <p className="text-gray-300 text-sm">
              Bachelor’s in Information Technology • <b>Sep 2022 – Jun 2026</b>
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-400 text-sm space-y-1">
              <li>Major: Software Development</li>
              <li>Current GPA: <b>3.31 / 4.0</b></li>
              <li>TOEIC: <b>730</b></li>
            </ul>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard
              title="JavaScript"
              desc="Building components, handling state, API integration."
            />
            <SkillCard
              title="Spring Boot"
              desc="REST API, MVC, connect to database."
            />
            <SkillCard
              title="MySQL"
              desc="Schema design, CRUD operations."
            />
            <SkillCard
              title="Git"
              desc="Branching, commits, pull requests."
            />
          </div>
        </motion.div>

          {/* 💡 Mindset & Work Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#00FF88] mb-3">💡 Mindset & Work Values</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>I believe that hard work brings luck — the more effort you put in, the more doors open.</li>
              <li>I’m honest, humble, and detail-oriented, always aiming to keep things under control with clear planning.</li>
              <li>Challenges don’t scare me; the harder the problem, the more I’m motivated to solve it.</li>
              <li>Even though I’m a quiet person, I let my work and consistency speak for me.</li>
              <li><b>My motto:</b> “Step small every day.”</li>
            </ul>
          </motion.div>

          {/* 🚀 Goals & Ambitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#00FF88] mb-3">🚀 Goals & Ambitions</h2>
            <p>
              My goal is to become a skilled <b>Fullstack Developer</b> and <b>AI enthusiast</b>, constantly learning new things and building technologies that make people’s lives easier.
              I don’t want to stay in one place for too long — I thrive in growth, change, and continuous self-improvement.
              Ultimately, I want to be independent, earn through my own abilities, and enjoy a meaningful, balanced life.
            </p>
          </motion.div>

          {/* 🌍 Beyond Coding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#00FF88] mb-3">🌍 Beyond Coding</h2>
            <p>
              Outside of tech, I love <b>traveling</b> and exploring new places, <b>working out</b> to stay both physically and mentally strong,
              and <b>listening to rap music</b> for inspiration and energy.
              These moments help me recharge and remind me that progress isn’t just about career — it’s about becoming a better version of myself.
            </p>
          </motion.div>

          {/* ✨ Core Beliefs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-[#00FF88] mb-3">✨ Core Beliefs </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Hard work creates luck.</li>
              <li>Always plan before acting.</li>
              <li>Never avoid challenges — face them and learn.</li>
              <li>Progress, not perfection — step small every day.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer/ >
    </>
  );
}
/* ===== SkillCard Component ===== */
function SkillCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FF88" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 bg-[#0B0C10]/70 border border-[#00FF88]/40 rounded-xl shadow-lg hover:border-[#00FF88] hover:shadow-[#00FF88]/30 transition-all duration-300"
    >
      <h4 className="text-lg font-semibold text-[#00FF88] mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </motion.div>
  );
}
