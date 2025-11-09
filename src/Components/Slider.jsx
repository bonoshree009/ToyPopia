import React, { useState } from "react";

// High-resolution kids toy images
const slides = [
  "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=80",
  "https://png.pngtree.com/thumb_back/fh260/background/20240727/pngtree-the-kid-plays-the-pyramid-child-playing-with-wooden-toys-image_15927880.jpg",
  "https://www.color-meanings.com/wp-content/uploads/2024/05/collection-of-colorful-toys-for-kids.jpg"
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-[450px] flex items-center justify-center relative overflow-hidden mt-10">

      {/* Slide wrapper */}
      <div className="relative w-full flex items-center justify-center">
        {slides.map((img, i) => {
          const offset = (i - index + slides.length) % slides.length;

          return (
            <div
              key={i}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                zIndex: offset === 0 ? 30 : 10,
                transform:
                  offset === 0
                    ? "translateX(0px) scale(1.05)" // center slightly bigger
                    : offset === 1
                    ? "translateX(250px) scale(1) rotateY(-12deg)" // right
                    : "translateX(-250px) scale(1) rotateY(12deg)", // left
                opacity: offset === 0 ? 1 : 0.9
              }}
            >
              <img
                src={img}
                alt={`slide-${i}`}
                className="w-[450px] h-[280px] object-cover rounded-xl shadow-xl"
              />
            </div>
          );
        })}
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg"
      >
        ❮
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg"
      >
        ❯
      </button>
    </div>
  );
}
