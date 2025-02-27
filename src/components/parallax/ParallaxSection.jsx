import { useEffect, useState } from "react";
import { ParallaxWrapper, ParallaxContent } from "./ParallaxStyle";

const ParallaxSection = ({ children, height, bgImage }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.3); // Ajuste a velocidade do efeito
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParallaxWrapper height={height} bgImage={bgImage}>
      <ParallaxContent $offsetY={offsetY}>{children}</ParallaxContent> 
      {/* Adicionamos "$" para evitar erro no React */}
    </ParallaxWrapper>
  );
};

export default ParallaxSection;
