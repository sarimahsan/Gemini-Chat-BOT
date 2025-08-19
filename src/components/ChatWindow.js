import React, { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages = [], memories = [] }) {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, memories]);

  return (
    <main className="flex-1 p-6 overflow-y-auto" ref={scrollRef}>
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} text={m.text} />
        ))}

        {/* Optional: show quick memory summary card */}
        {memories.length > 0 && (
          <div className="mt-6 p-4 bg-gradient-to-r from-transparent to-cyan-900/10 rounded-lg border border-gray-700">
            <div className="text-xs text-gray-300 font-semibold mb-2">Recent memories used</div>
            <div className="flex gap-2 flex-wrap">
              {memories.slice(0, 5).map((m) => (
                <div key={m.id} className="text-[12px] px-3 py-1 bg-gray-800 rounded-full text-teal-200">
                  {m.text.length > 30 ? m.text.slice(0, 30) + "…" : m.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
