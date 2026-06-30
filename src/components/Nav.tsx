"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { Emblem } from "./Emblem";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("arrival");
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";

  useEffect(() => {
    function onActive(e: Event) {
      const id = (e as CustomEvent<string>).detail;
      setActive(id);
    }
    window.addEventListener("section:active", onActive as EventListener);
    return () => window.removeEventListener("section:active", onActive as EventListener);
  }, []);

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("#")) {
      if (!onHome) {
        router.push("/" + href);
        return;
      }
      const id = href.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    } else {
      router.push(href);
    }
  }

  return (
    <>
      <button
        onClick={() => go(onHome ? "#arrival" : "/")}
        aria-label="THE SHRIKS — top"
        className="fixed top-5 left-5 z-50 text-signal hover:opacity-80 transition-opacity"
      >
        <Emblem size={40} />
      </button>

      <nav className="fixed top-7 right-7 z-50 hidden md:flex items-center gap-6 mono caps text-[11px] text-signal/70">
        {NAV.slice(1).map((item) => {
          const id = item.href.replace(/^#/, "");
          const isActive = onHome && active === id;
          return (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className={`relative transition-colors ${isActive ? "text-signal" : "hover:text-signal"}`}
            >
              <span className="text-signal/40 mr-2">{item.index}</span>
              {item.label}
              {isActive && <span className="absolute -bottom-2 left-0 right-0 h-px bg-signal" />}
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        className="fixed top-6 right-6 z-50 md:hidden mono caps text-[11px] text-signal"
      >
        {open ? "CLOSE" : "MENU"}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-obsidian md:hidden flex flex-col items-center justify-center gap-6">
          {NAV.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="mono caps text-2xl text-signal"
            >
              <span className="text-signal/40 mr-3">{item.index}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
