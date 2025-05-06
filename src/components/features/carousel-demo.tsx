"use client";
import { Carousel } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
interface MenuPackage {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  numberOfPeople: number;
  category: string;
  aditionalServices: string;
}
export function CarouselDemo() {
  const [slideData, setSlideData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/menuPackage")
      .then((res) => res.json())
      .then((data) => {
        const formattedSlides = data.map((item: MenuPackage) => ({
          title: item.title,
          button: "Ver más",
          src: item.imageUrl,
          description: item.description,
          price: item.price,
          numberofpeople: item.numberOfPeople,
          category: item.category,
          aditionalServices: item.aditionalServices,
        }));
        console.log("Slides cargados:", formattedSlides);
        setSlideData(formattedSlides);
      })
      .catch((error) => {
        console.error("Error al obtener datos del backend:", error);
      });
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
