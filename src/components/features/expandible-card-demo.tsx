"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../ui/use-outside-click";
import { menuPackage } from "@/components/Interfaces/MenuPackage";

export function ExpandableCardDemo({
  onCardToggle,
  isCardExpanded,
  onSeleccionar,
}: {
  onCardToggle: () => void;
  isCardExpanded: boolean;
  onSeleccionar: (card: menuPackage) => void;
}) {
  /*Active save the current state of the active card (the expanded). It can be an object of Cards, False or Null. */
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [cards, setCards] = useState<menuPackage[]>([]);
  /*
  ref: Reference to the expanded card (to know if you click outside it).
  id: Unique ID for animations between elements using Framor-Motion.
 */
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  useEffect(() => {
    fetch("http://localhost:8080/menuPackage")
      .then((res) => res.json())
      .then((data: menuPackage[]) => {
        console.log("Contenido real de la respuesta:", data); //  Verify that it is an array
        setCards(data);
      })
      .catch((err) => console.error("Error fetching menu packages:", err));
  }, []);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false); // close with ESC
      }
    }
    // Deactivate the body scroll if there is an active card
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  //Use the custom hook to close the card if you click outside the expanded area (REF).
  useOutsideClick(ref, () => {
    setActive(null);
    onCardToggle();
  });

  return (
    <>
      {/* Dark background behind the expanded card */}

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 inset-0 z-[9998] bg-black/30 backdrop-blur-sm "
          />
        )}
      </AnimatePresence>

      {/* CardExpanded */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0   grid place-items-center z-[9999]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.03,
                },
              }}
              className="flex  top-2 right-2 lg:hidden  items-center justify-center bg-white rounded-full h-6 w-6 "
              onClick={() => {
                setActive(null);
                onCardToggle();
              }}
            >
              <CloseIcon />
            </motion.button>

            {/*Show Card Expanded */}

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              //Card Expanded Style
              className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-full max-w-[500px] max-h-[90vh] overflow-auto flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl "
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.imageUrl}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top "
                />
              </motion.div>

              {/* Card Expanded: Título, descripción y botón CTA (“Reservar”) */}
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    onClick={() => onSeleccionar(active)}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full bg-[#fd8a26] text-white cursor-pointer"
                  >
                    Elegir
                  </motion.a>
                </div>
                {/* Expanded content section. It can be a text or function that JSX returns.*/}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {/*{typeof active.content === "function"
                      ? active.content()
                      : active.content}*/}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : /*Close Card Expanded. */
        null}
      </AnimatePresence>
      {/* Cards List */}
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => {
              setActive(card);
              onCardToggle();
            }}
            // Card style
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#848282] dark:hover:bg-neutral-800 rounded-xl cursor-pointer border-none shadow-lg"
          >
            {/*Card: imagen, título, descripción y botón. */}
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.imageUrl}
                  alt={card.title}
                  className="h-10 w-10 md:h-10 md:w-10 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-black  dark:text-neutral-600 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p className="text-black text-[14px] dark:text-neutral-400 text-center md:text-left">
                  {card.category}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              style={{ backgroundColor: "#fd8a26" }}
              className="px-4 py-2 text-sm rounded-full  hover:bg-[#2F2D2D] hover:text-white text-black mt-4 md:mt-0 cursor-pointer border-none shadow-lg"
            >
              Ver Más
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
// Close Icon(X)
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
