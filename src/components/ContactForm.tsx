"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const CHANNELS = ["Engagement", "Investment", "Press", "Collaboration", "Other"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [channel, setChannel] = useState<string>("Engagement");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!channel) {
      setStatus("error");
      setErrMsg("Select a channel");
      return;
    }
    setStatus("sending");
    setErrMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      channel,
      intent: String(fd.get("intent") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    try {
      const res = await fetch("/api/transmit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Transmission failed");
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setChannel("");
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="border border-rule">
      <div className="grid md:grid-cols-2 border-b border-rule">
        <Field label="NAME" name="name" required className="md:border-r border-rule" />
        <Field label="EMAIL" name="email" type="email" required />
      </div>

      <div className="border-b border-rule p-6 md:p-8">
        <div className="flex items-baseline justify-between mono caps text-[10px] text-signal/40 mb-4">
          <span>CHANNEL</span>
          <span className="text-signal/30">REQUIRED</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {CHANNELS.map((c) => {
            const active = channel === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setChannel(c)}
                aria-pressed={active}
                className={`caps text-[13px] tracking-wide px-4 py-2 border transition-colors ${
                  active
                    ? "border-signal bg-signal text-obsidian"
                    : "border-rule-strong text-signal/65 hover:border-signal/60 hover:text-signal"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <Field label="INTENT" name="intent" placeholder="One line" required className="border-b border-rule" />
      <TextareaField label="MESSAGE" name="message" required />

      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="mono caps text-[10px] text-signal/50">
          STATUS:{" "}
          <span className={status === "sent" ? "text-loki-glow" : status === "error" ? "text-signal" : "text-signal/70"}>
            {status === "idle" && "AWAITING TRANSMISSION"}
            {status === "sending" && "TRANSMITTING…"}
            {status === "sent" && "● RECEIVED · WE WILL RESPOND"}
            {status === "error" && `FAILED · ${errMsg}`}
          </span>
        </div>
        <motion.button
          whileHover={{ x: 8 }}
          transition={{ duration: 0.25 }}
          disabled={status === "sending"}
          type="submit"
          className="caps text-xl md:text-2xl text-signal disabled:opacity-50 inline-flex items-baseline gap-4"
        >
          <span>TRANSMIT</span>
          <span className="mono text-base">→</span>
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, placeholder, className = "",
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <label className={`block p-6 md:p-8 group ${className}`}>
      <div className="flex items-baseline justify-between mono caps text-[10px] text-signal/40 mb-3">
        <span>{label}</span>
        {required && <span className="text-signal/30">REQUIRED</span>}
      </div>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="text-xl md:text-2xl caps tracking-tight text-signal placeholder:text-signal/25 bg-transparent w-full border-b border-rule pb-3 focus:border-signal/50 outline-none transition-colors"
      />
    </label>
  );
}

function TextareaField({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block p-6 md:p-8 border-b border-rule">
      <div className="flex items-baseline justify-between mono caps text-[10px] text-signal/40 mb-3">
        <span>{label}</span>
        {required && <span className="text-signal/30">REQUIRED</span>}
      </div>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="text-lg text-signal placeholder:text-signal/25 bg-transparent w-full resize-none leading-relaxed border-b border-rule pb-3 focus:border-signal/50 outline-none transition-colors"
      />
    </label>
  );
}
