"use client";
import { Carousel } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
interface MenuPackage {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}
export function CarouselDemo() {
  const [slideData, setSlideData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/menuPackage")
      .then((res) => res.json())
      .then((data) => {
        const formattedSlides = data.map((item: MenuPackage) => ({
          title: item.title,
          button: "Ver más", // Puedes cambiarlo según lo que desees
          src: item.imageUrl, // Imagen por defecto
          description: item.description, // Si lo necesitas en tu Card
          price: item.price, // También puedes pasarlo
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
