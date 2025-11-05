"use client";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0B0C10]/90 backdrop-blur-md border-b border-[#00FF88]/30 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-[#00FF88] drop-shadow-[0_0_6px_#00FF88] hover:text-[#00cc66] transition">
          Thong Thien
        </Link>

        {/* Menu Items */}
        <ul className="flex gap-6 text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative group font-medium transition"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00FF88] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
