import { useState, useRef, useEffect } from "react";

const categories = ["Web Development", "Graphic Design"];

export default function CategorySelector() {
  const [selected, setSelected] = useState(categories[0]);
  const [bgStyle, setBgStyle] = useState({ width: "auto", left: 0 });
  const containerRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current && btnRefs.current.length) {
      const selectedIndex = categories.indexOf(selected);
      const selectedBtn = btnRefs.current[selectedIndex];

      if (selectedBtn) {
        setBgStyle({
          width: `${selectedBtn.offsetWidth}px`,
          left: `${selectedBtn.offsetLeft}px`,
        });
      }
    }
  }, [selected]);

  return (
    <div className="mb-10 mt-5 flex items-center justify-center text-sm">
      <div
        ref={containerRef}
        className="relative flex rounded-full bg-gray-200 p-2"
      >
        {/* Moving Background with Dynamic Width */}
        <div
          className="absolute top-1/2 h-[80%] -translate-y-1/2 rounded-full bg-white transition-all duration-300"
          style={{
            width: bgStyle.width,
            left: bgStyle.left,
          }}
        />
        {/* Category Buttons */}
        {categories.map((category, index) => (
          <button
            key={category}
            ref={(el) => (btnRefs.current[index] = el)}
            className={`relative z-10 px-4 py-2 text-gray-600 transition ${
              selected === category ? "font-semibold" : "opacity-60"
            }`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
