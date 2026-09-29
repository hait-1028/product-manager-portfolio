"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "top", label: "首页", icon: "home" },
  { id: "education", label: "教育背景", icon: "education" },
  { id: "projects", label: "精选项目", icon: "folder" },
  { id: "experience", label: "工作经历", icon: "briefcase" },
  { id: "strengths", label: "匹配优势", icon: "star" },
  { id: "honors", label: "获奖经历", icon: "trophy" },
  { id: "contact", label: "联系我", icon: "mail" },
] as const;

function Icon({ name }: { name: (typeof navItems)[number]["icon"] | "moon" | "sun" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (name) {
    case "home": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m3.5 10 8.5-7 8.5 7"/><path d="M5.5 9v11h13V9M9.5 20v-6h5v6"/></svg>;
    case "education": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z"/><path d="M6 11v5c3.5 3 8.5 3 12 0v-5M21.5 9v6"/></svg>;
    case "folder": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M3 6.5h7l2 2H21v9.8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Z"/><path d="M3 10h18"/></svg>;
    case "briefcase": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></svg>;
    case "star": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>;
    case "trophy": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4M12 14v4M8 21h8M9 18h6"/></svg>;
    case "mail": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
    case "moon": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="M20.5 15.2A8.8 8.8 0 0 1 8.8 3.5 9 9 0 1 0 20.5 15.2Z"/></svg>;
    case "sun": return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
  }
}

export default function SiteHeader({ name, role }: { name: string; role: string }) {
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<string | null>(null);
  const [activeSection, setActiveSection] = useState("top");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const themeFrame = window.requestAnimationFrame(() => {
      let initialTheme: "light" | "dark" = "light";
      try {
        initialTheme = window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
      } catch { /* Theme switching also works when browser storage is unavailable. */ }
      document.documentElement.dataset.theme = initialTheme;
      setTheme(initialTheme);
    });

    let scrollFrame = 0;
    const updateActiveSection = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        const offset = (headerRef.current?.offsetHeight ?? 72) + 40;
        const current = [...navItems].reverse().find(({ id }) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top <= offset;
        });
        const atBottom = window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        const anchor = anchorRef.current && document.getElementById(anchorRef.current);
        const anchorVisible = anchor && anchor.getBoundingClientRect().top < window.innerHeight && anchor.getBoundingClientRect().bottom > offset;
        setActiveSection(atBottom ? (anchorVisible ? anchorRef.current! : "contact") : current?.id ?? "top");
        scrollFrame = 0;
      });
    };

    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-height", `${headerRef.current?.offsetHeight ?? 72}px`);
      updateActiveSection();
    });
    if (headerRef.current) observer.observe(headerRef.current);

    const clearAnchor = () => { anchorRef.current = null; updateActiveSection(); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) clearAnchor();
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("wheel", clearAnchor, { passive: true });
    window.addEventListener("touchmove", clearAnchor, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    updateActiveSection();
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("wheel", clearAnchor);
      window.removeEventListener("touchmove", clearAnchor);
      window.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(themeFrame);
      window.cancelAnimationFrame(scrollFrame);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const links = linksRef.current;
    const activeLink = links?.querySelector<HTMLElement>('[aria-current="location"]');
    if (links && activeLink) {
      links.scrollTo({ left: activeLink.offsetLeft - links.offsetLeft - (links.clientWidth - activeLink.offsetWidth) / 2, behavior: "instant" });
    }
  }, [activeSection]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try { window.localStorage.setItem("portfolio-theme", nextTheme); } catch { /* Optional preference persistence. */ }
    setTheme(nextTheme);
  };

  return (
    <header className="siteHeader" ref={headerRef}>
      <a className="brand" href="#top"><span>HS</span><div><b>{name}</b><small>{role}</small></div></a>
      <nav className="navDock" aria-label="主导航">
        <div className="navLinks" ref={linksRef}>
        {navItems.map(({ id, label, icon }) => (
          <a className="navLink" href={`#${id}`} key={id} onClick={() => { anchorRef.current = id; setActiveSection(id); }} aria-current={activeSection === id ? "location" : undefined}>
            <Icon name={icon} /><span>{label}</span>
          </a>
        ))}
        </div>
      <button className="themeToggle" type="button" onClick={toggleTheme} aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"} aria-pressed={theme === "dark"}>
        <span className="themeIcon"><Icon name={theme === "light" ? "moon" : "sun"} /></span><span>{theme === "light" ? "Night" : "Day"}</span>
      </button>
      </nav>
    </header>
  );
}
