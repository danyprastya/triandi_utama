import React from "react";
import Project2 from "./Project2";

const imageSlides = [
  { id: 1, src: "../../public/infrastruktur.png", alt: "Infrastruktur" },
  { id: 2, src: "../../public/konstruksirumah.png", alt: "Konstruksi Rumah" },
  { id: 3, src: "../../public/galian.png", alt: "Galian" },
  { id: 4, src: "../../public/desaininterior.png", alt: "Desain Interior" },
  { id: 5, src: "../../public/maintenance.png", alt: "Maintenance" },
  { id: 6, src: "../../public/aspal.png", alt: "Aspal" },
];

const MyApp = () => {
  return (
    <div>
      <Project2 slides={imageSlides} />
    </div>
  );
};

export default MyApp;