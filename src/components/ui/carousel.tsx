"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  description: string;
  price: number;
  src: string;
  button: string;
  numberOfPeople: number;
  category: string;
  aditionalServices: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  flippedIndex: number | null;
  setFlippedIndex: (index: number | null) => void;
}

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  flippedIndex,
  setFlippedIndex,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const isFlipped = flippedIndex === index;
  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const handleFlipClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Importante para que no cambie el slide
    if (isFlipped) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const {
    src,
    button,
    title,
    description,
    price,
    numberOfPeople,
    aditionalServices,
  } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* Contenedor que gira */}
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Face */}
          <div className="absolute w-full h-full backface-hidden rounded-[1%] overflow-hidden bg-[#1D1F2F]">
            <img
              className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
              style={{
                opacity: current === index ? 1 : 0.5,
                transform:
                  current === index
                    ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                    : "none",
              }}
              alt={title}
              src={src}
              onLoad={imageLoaded}
              loading="eager"
              decoding="sync"
            />
            {current === index && (
              <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
            )}
            <article
              className={`relative p-[4vmin] h-full flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-in-out ${
                current === index
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
                {title}
              </h2>
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleFlipClick}
                  className="px-6 py-3 w-fit sm:text-sm text-black bg-white h-12 border border-transparent text-sm flex justify-center items-center rounded-2xl transition duration-300 ease-in-out 
             hover:bg-neutral-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  <span className="tracking-wide">{button}</span>
                </button>
              </div>
            </article>
          </div>

          {/* Back Face */}
          <div
            className="absolute w-full h-full backface-hidden bg-white rounded-[1%] p-6 text-black"
            style={{
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="">
              <label>Descripción</label>
              <p className="text-sm mb-6">{description}</p>
              <label>
                Cantidad de Personas:
                <p className="text-sm mb-6">{numberOfPeople}</p>
              </label>
              <label>
                Servicios Extras:
                <p className="text-sm mb-6">{aditionalServices}</p>
              </label>
              <label>
                Precio:
                <p className="text-sm mb-6">{price}</p>
              </label>
            </div>
            <button
              onClick={handleFlipClick}
              className="px-4 py-2 bg-black text-white rounded-2xl text-xs hover:shadow-lg transition duration-200"
            >
              Volver
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-6 h-6 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handlePreviousClick = () => {
    setFlippedIndex(null); // 🔥 Al cambiar de slide, resetear el flip
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    setFlippedIndex(null);
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    setFlippedIndex(null);
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            flippedIndex={flippedIndex}
            setFlippedIndex={setFlippedIndex}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
