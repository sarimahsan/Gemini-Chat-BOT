import React from "react";
import { motion } from "framer-motion";

export default function MessageBubble({ role, text }) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`p-3 rounded-2xl max-w-[75%] break-words leading-relaxed ${
          isUser
            ? "bg-gradient-to-r from-teal-500/90 to-teal-400/80 text-black shadow-[0_6px_30px_rgba(20,184,166,0.12)]"
            : "bg-gray-800 text-gray-100 shadow-[0_6px_20px_rgba(75,85,99,0.08)]"
        }`}
      >
        <div className="whitespace-pre-wrap">{text}</div>
      </div>
    </motion.div>
  );
}
