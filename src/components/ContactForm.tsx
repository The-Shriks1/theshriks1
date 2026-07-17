"use client";

import { useState, FormEvent, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, View, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { random } from "maath";

const CHANNELS = ["Engagement", "Investment", "Press", "Collaboration", "Other"] as const;

// A high-fidelity Particle Swarm that reacts to typing and beats
function ParticleSwarm({ isTyping, isSending }: { isTyping: boolean, isSending: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  // Create a sphere of particles
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }) as Float32Array;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Base slow rotation
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;

      if (isSending) {
        pointsRef.current.rotation.y -= delta * 5;
        pointsRef.current.rotation.z += delta * 2;
      }
    }

    if (coreRef.current) {
       // Ensure core is completely static in scale
       coreRef.current.scale.set(1, 1, 1);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color={isSending ? "#00f0ff" : "#00ffaa"} 
          size={0.015} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Central Core Glow that beats */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial 
          color={isSending ? "#00f0ff" : "#00ffaa"} 
          transparent 
          opacity={isTyping ? 0.4 : (isSending ? 0.7 : 0.1)} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>
    </group>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [channel, setChannel] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  // Track typing for 3D reactivity
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [values, setValues] = useState({
    name: "",
    email: "",
    intent: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    
    setIsTyping(true);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => setIsTyping(false), 500);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!channel) {
      setStatus("error");
      setErrMsg("Please select a topic.");
      return;
    }
    setStatus("sending");
    setErrMsg("");
    
    try {
      const res = await fetch("/api/transmit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, channel }),
      });
      
      // Artificial delay for the realistic animation effect
      await new Promise(r => setTimeout(r, 2000));
      
      if (!res.ok) throw new Error("Failed to send message. Please try again.");
      
      setStatus("sent");
      setValues({ name: "", email: "", intent: "", message: "" });
      setChannel("");
      
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "An unknown error occurred.");
    }
  }

  // Input wrapper styling for a highly minimal, illustrative look
  const inputWrapperClass = (isFocused: boolean) => `
    relative overflow-hidden rounded-xl bg-[#0a0a0a] border transition-all duration-500
    ${isFocused ? 'border-[#444] shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'border-[#1a1a1a] hover:border-[#2a2a2a]'}
  `;

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch mt-8">
      
      {/* LEFT: 3D Data Swarm */}
      <div className="hidden lg:flex w-[450px] rounded-3xl border border-[#1a1a1a] bg-gradient-to-b from-[#050505] to-[#000] relative overflow-hidden items-center justify-center shadow-2xl">
        {/* Subtle grid lines for illustrative feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8">
           <div className="flex justify-between items-start opacity-40">
              <span className="mono text-[10px] tracking-widest text-neutral-400">NETWORK_NODE</span>
              <span className="mono text-[10px] tracking-widest text-neutral-400">SECURE</span>
           </div>
           <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                 <span className="mono text-[10px] tracking-widest text-neutral-500">STATUS</span>
                 <span className={`mono text-[11px] tracking-widest font-bold ${status === 'sending' ? 'text-cyan-400 animate-pulse' : (status === 'sent' ? 'text-emerald-400' : 'text-neutral-300')}`}>
                    {status === 'sending' ? 'TRANSMITTING' : (status === 'sent' ? 'DELIVERED' : 'READY')}
                 </span>
              </div>
           </div>
        </div>
        
        <View className="w-full h-full">
           <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={50} />
           <ParticleSwarm isTyping={isTyping} isSending={status === 'sending'} />
        </View>
      </div>

      {/* RIGHT: The Minimal Structured Form */}
      <div className="flex-1 rounded-3xl border border-[#1a1a1a] bg-[#050505] p-8 md:p-12 relative shadow-2xl overflow-hidden">
        
        {/* Subtle background glow for illustrative depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

        <form onSubmit={onSubmit} className="flex flex-col gap-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NAME */}
            <div className="relative flex flex-col gap-2">
              <label htmlFor="name" className="text-[12px] uppercase tracking-widest text-[#666] ml-1">Full Name</label>
              <div className={inputWrapperClass(focusedField === 'name')}>
                {focusedField === 'name' && (
                  <motion.div layoutId="highlight" className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
                )}
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-transparent px-5 py-4 text-neutral-200 placeholder-[#333] outline-none text-[15px]"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="relative flex flex-col gap-2">
              <label htmlFor="email" className="text-[12px] uppercase tracking-widest text-[#666] ml-1">Email Address</label>
              <div className={inputWrapperClass(focusedField === 'email')}>
                {focusedField === 'email' && (
                  <motion.div layoutId="highlight" className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
                )}
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="jane@example.com"
                  className="w-full bg-transparent px-5 py-4 text-neutral-200 placeholder-[#333] outline-none text-[15px]"
                />
              </div>
            </div>
          </div>

          {/* TOPIC SELECTOR (CUSTOM DROPDOWN) */}
          <div className="relative flex flex-col gap-2 pt-2 mb-2">
            <label className="text-[12px] uppercase tracking-widest text-[#666] ml-1">Transmission Frequency</label>
            <div className={inputWrapperClass(focusedField === 'channel' || isDropdownOpen)}>
              {(focusedField === 'channel' || isDropdownOpen) && (
                <motion.div layoutId="highlight" className="absolute left-0 top-0 bottom-0 w-[2px] bg-white pointer-events-none" />
              )}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onFocus={() => setFocusedField("channel")}
                onBlur={() => {
                  setFocusedField(null);
                  setTimeout(() => setIsDropdownOpen(false), 200);
                }}
                style={{ paddingTop: "22px", paddingBottom: "22px" }}
                className={`w-full bg-transparent px-5 text-left outline-none text-[15px] cursor-pointer flex justify-between items-center transition-colors ${channel === "" ? "text-[#555]" : "text-white font-medium"}`}
              >
                <span className="tracking-[0.05em] text-[16px] font-mono">{channel ? channel.toUpperCase() : "SELECT CATEGORY"}</span>
                <motion.span 
                  animate={{ rotate: isDropdownOpen ? 45 : 0 }} 
                  transition={{ duration: 0.2 }}
                  className="text-signal/50 font-mono text-[20px] pr-1"
                >
                  +
                </motion.span>
              </button>
            </div>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-[96px] left-0 right-0 z-50 bg-black/95 backdrop-blur-md border border-[#1a1a1a] rounded-xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                >
                  {CHANNELS.map((c, i) => (
                    <button
                      key={c}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault(); // Prevent blur before click fires
                        setChannel(c);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-6 py-4 text-[13px] font-mono tracking-wider transition-all duration-300 flex items-center justify-between group/item
                        ${channel === c ? "bg-white/10 text-white" : "text-neutral-400 hover:bg-white/[0.02] hover:text-white"}`}
                    >
                      <div className="flex items-center gap-4 transition-transform duration-300 group-hover/item:translate-x-2">
                        <span className="text-signal/20 text-[10px] group-hover/item:text-signal transition-colors">0{i+1}</span>
                        <span>{c.toUpperCase()}</span>
                      </div>
                      <span className="opacity-0 group-hover/item:opacity-100 transition-all duration-300 text-signal/60 text-[10px] tracking-normal">
                        [ SELECT ]
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SUBJECT */}
          <div className="relative flex flex-col gap-2 pt-2">
            <label htmlFor="intent" className="text-[12px] uppercase tracking-widest text-[#666] ml-1">Subject</label>
            <div className={inputWrapperClass(focusedField === 'intent')}>
              {focusedField === 'intent' && (
                <motion.div layoutId="highlight" className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
              )}
              <input
                id="intent"
                name="intent"
                type="text"
                required
                value={values.intent}
                onChange={handleChange}
                onFocus={() => setFocusedField("intent")}
                onBlur={() => setFocusedField(null)}
                placeholder="What is this regarding?"
                className="w-full bg-transparent px-5 py-4 text-neutral-200 placeholder-[#333] outline-none text-[15px]"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="relative flex flex-col gap-2 pt-2">
            <label htmlFor="message" className="text-[12px] uppercase tracking-widest text-[#666] ml-1">Message</label>
            <div className={inputWrapperClass(focusedField === 'message')}>
              {focusedField === 'message' && (
                <motion.div layoutId="highlight" className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
              )}
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={values.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder="Type your message here..."
                className="w-full bg-transparent px-5 py-4 text-neutral-200 placeholder-[#333] outline-none text-[15px] resize-none"
              />
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 mt-2 border-t border-[#1a1a1a]">
            
            <div className="text-[13px] font-medium mb-4 sm:mb-0 h-6 flex items-center">
               <AnimatePresence mode="wait">
                  {status === "sending" && (
                    <motion.div key="sending" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex items-center gap-2 text-cyan-400">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting...
                    </motion.div>
                  )}
                  {status === "sent" && (
                    <motion.div key="sent" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Transmission Secured!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div key="error" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-red-400">
                      {errMsg}
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>

            <button
              disabled={status === "sending" || status === "sent"}
              type="submit"
              className="relative px-12 py-4 rounded-xl font-semibold text-[14px] tracking-wide overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black hover:bg-neutral-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              {status === "sending" ? "Transmitting..." : (status === "sent" ? "Transmitted" : "Transmit")}
            </button>

          </div>
        </form>
      </div>

    </div>
  );
}
