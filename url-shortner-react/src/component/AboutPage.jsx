import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine, FaSmile, FaUsers, FaCheckCircle } from "react-icons/fa";
import Card from "./Card.jsx";
import { motion } from "framer-motion";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-8 text-gray-800 bg-white">
      <div className="mb-16">
        <h1 className="sm:text-5xl text-4xl font-bold font-family-montserrat text-slate-800 mb-4">
          Meet Short.ly
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 text-lg xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full bg-white p-6 rounded-lg shadow-md"
        >
          <span className="font-semibold text-slate-900">Short.ly</span> is more than just a tool — it’s your gateway to a cleaner, faster, and more professional web presence. Whether you’re sharing links across platforms, analyzing user engagement, or strengthening your brand, Short.ly ensures every link works harder for you. <span className="text-blue-500 font-medium">Intuitive to use</span>, <span className="text-green-500 font-medium">powerful under the hood</span>, and <span className="text-pink-500 font-medium">built for scale</span> — that’s the Short.ly promise.
        </motion.p>
      </div>

      {/* Our Journey */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 p-8 rounded-xl shadow-lg text-gray-800"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Journey</h2>
        <p className="text-base">
          What started as a side hustle by a group of passionate developers has grown into a scalable solution trusted by hundreds of users globally. We built Short.ly because we believe sharing links should be simple, smart, and secure.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        <Card title="Simplify Your Sharing" desc="Generate compact, elegant links instantly, saving space and boosting click-through rates across platforms." />
        <Card title="Real-Time Insights" desc="Understand user behavior with detailed metrics—clicks, locations, devices, and more—right at your fingertips." />
        <Card title="Stay On Brand" desc="Customize URLs to reflect your brand identity, increase trust, and drive engagement." />
        <Card title="Built for Developers" desc="Access our robust APIs and integrate URL shortening features into your own apps or workflows." />
      </div>

      {/* Personality & Team */}
      <div className="text-gray-800 rounded-lg p-10 shadow-md mb-16 bg-white">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <FaSmile /> Our Personality
        </h2>
        <p className="text-base">
          Friendly, fast, and functional. At Short.ly, we blend cutting-edge tech with a human touch. We believe in making the internet cleaner and your day simpler.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[{
            name: "Sumanta Jana",
            role: "Founder & Backend Engineer",
            img: avatar1
          }, {
            name: "Priya Singh",
            role: "Frontend Developer",
            img: avatar2
          }, {
            name: "Rahul Verma",
            role: "UI/UX Designer",
            img: avatar3
          }].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 w-64 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-slate-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">
          What Our Users Say
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {["Short.ly is an absolute game-changer for sharing links in our marketing campaigns.",
            "Love the UI and the analytics. Makes tracking user behavior so easy.",
            "The custom branded links helped boost our trust factor with customers."].map((quote, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="p-6 bg-white shadow-md rounded-lg border border-slate-100"
            >
              <p className="text-slate-600 italic">"{quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-4 flex justify-center items-center gap-2">
          <FaUsers className="text-blue-500" /> Trusted by 5,000+ Users
        </h2>
        <p className="text-gray-600 mb-2">
          Startups, influencers, marketers, and businesses rely on Short.ly to
          power their link sharing every day.
        </p>
        <p className="text-green-600 flex justify-center items-center gap-2">
          <FaCheckCircle /> Verified Uptime: 99.99%
        </p>
      </div>

      {/* Call to Action */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
          Turn Browsers into Shorteners 🚀
        </h2>
        <p className="text-gray-700 mb-6">
          Join the smart sharing revolution. Get started with Short.ly today and
          simplify your link experience.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-gradient-to-r from-pink-400 to-yellow-400 text-white rounded-full font-bold shadow-md hover:opacity-90 transition-all"
        >
          Get Started Free
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
