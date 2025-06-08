'use client';

import { motion } from 'framer-motion';
import { FaSquareXTwitter } from "react-icons/fa6";
import { useRef } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Form submitted!!");
    formRef.current?.reset();
  };

const socialMediaLinks = {
  Twitter: "https://x.com/prakash_nc63815",
  GitHub: "https://github.com/ncprakash",
  LinkedIn: "https://www.linkedin.com/in/prakash-n-c-b466102ba/",
  Instagram: "https://www.instagram.com/nc_prak_ash/"
};

const socialIcons = {
  Twitter: <FaSquareXTwitter />,
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Instagram: <FaInstagram />
};

  return (
    <section id='contact'className="relative py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Decorative floating blurred circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-400/20"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-orange-800 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message and let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-orange-800 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-orange-800 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-orange-800 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-orange-800 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Send Message  <FaPaperPlane className="ml-2" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-orange-200 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-orange-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-900">Location</h4>
                      <p className="text-orange-800">Banglore </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-900">Phone</h4>
                      <p className="text-orange-800">+91 8123384573</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-900">Email</h4>
                      <p className="text-orange-800">ncprakash121@.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-orange-200">
                <h4 className="font-medium text-orange-900 mb-4">Follow Me</h4>
               <div className="flex gap-4">
      {Object.entries(socialIcons).map(([name, icon]) => (
        <motion.a
          key={name}
          href={socialMediaLinks[name]}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className="p-3 bg-orange-100 hover:bg-orange-200 rounded-full text-orange-600 transition-colors"
          aria-label={name}
        >
          {icon}
        </motion.a>
      ))}
    </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
