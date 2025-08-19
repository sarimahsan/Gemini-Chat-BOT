import React, { useState } from "react";

export default function InputBar({ onSend, loading }) {
  const [value, setValue] = useState("");

  const send = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center gap-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        className="flex-1 bg-gray-700 rounded-lg p-3 outline-none placeholder-gray-400"
        placeholder="Type a message or 'remember...' and press Enter"
      />
      <button
        onClick={send}
        disabled={loading}
        className="px-4 py-2 bg-teal-500 rounded-lg font-semibold hover:bg-teal-400 disabled:opacity-60"
      >
        {loading ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}
