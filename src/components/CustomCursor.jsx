import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (target.closest("a")) {
        setCursorType("link");
        setCursorText("");
      } else if (target.closest(".project-card")) {
        setCursorType("view");
        setCursorText("VIEW");
      } else if (target.closest("button, .btn-ghost")) {
        setCursorType("button");
        setCursorText("");
      } else if (target.closest("img")) {
        setCursorType("image");
        setCursorText("");
      } else if (target.closest("h1, h2, h3")) {
        setCursorType("text");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot cursor-${cursorType}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring cursor-${cursorType}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </>
  );
}