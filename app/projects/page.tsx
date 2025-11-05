"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "University Admission Management",
      role: "Fullstack Developer (Team Project)",
      period: "May 2024 — Jun 2024",
      desc: "A web application for students to register and manage university admission data, supporting multiple user roles.",
      tech: ["ReactJS", "Firebase", "MySQL", "REST API"],
      github: "https://github.com/ThongThien/UniverManage",
      image: "/assets/umana.png",
    },
    {
      title: "Scientist Info Management System",
      role: "Fullstack Developer (Team Project)",
      period: "Apr 2025 — Jun 2025",
      desc: "A system for managing scientists, publications, and research projects, including statistics dashboards.",
      tech: ["MySQL", "Spring Boot", "ReactJS"],
      github: "https://github.com/ThongThien/ScientInfo",
      image: "/assets/scmana.png",
    },
    {
      title: "Sports Class Management System",
      role: "Fullstack Developer (Personal Project)",
      period: "Apr 2025 — Jun 2025",
      desc: "A backend system to manage trainers, students, and training schedules using Spring Boot and MySQL.",
      tech: ["Spring Boot", "MySQL"],
      github: "https://github.com/ThongThien/fitclass_springboot",
      image: "/assets/fmana.png",
    },
    {
      title: "Orchid Disease Detection using YOLOv8",
      role: "AI Developer / Research Project",
      period: "Sep 2025 — Oct 2025",
      desc: "An AI-based system for detecting orchid leaf diseases using YOLOv8. The project focuses on object detection and classification of two major orchid diseases (Brown Spot, Soft Rot).",
      details:
        "Dataset labeling via Roboflow, training on Kaggle GPU (T4, 16GB VRAM), with 100 epochs and augmentations. The model achieved Precision ≈ 0.97, Recall ≈ 0.96, mAP@0.5 ≈ 0.99. The pipeline includes data preprocessing, YOLOv8n model training, and evaluation through confusion matrix and loss convergence analysis.",
      tech: ["YOLOv8", "PyTorch", "Roboflow", "Kaggle", "Computer Vision"],
      github: "https://www.kaggle.com/code/neiht2004/notebookc71ae75526",
      image: "/assets/objdt.jpg"
    }
  ];

  return (
    <>
    <section className="min-h-screen bg-[#0B0C10] text-white px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#00FF88] text-center mb-16 drop-shadow-[0_0_8px_#00FF88]"
        >
          💼 My Featured Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0B0C10]/80 border border-[#00FF88]/40 rounded-xl overflow-hidden shadow-lg hover:border-[#00FF88] hover:shadow-[0_0_20px_#00FF88] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-[#00FF88]">
                  {proj.title}
                </h2>
                <p className="text-sm text-gray-400 italic">{proj.role} • {proj.period}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{proj.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      className="text-[#00FF88] text-sm hover:underline"
                    >
                      🔗 View 
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
