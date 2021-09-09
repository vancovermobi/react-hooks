import { useEffect, useRef, useState } from "react";

function getRandomColor(currentColor) {
//   console.log('CurrentColor: ',currentColor);
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while ( currentIndex == newIndex ) {
    newIndex = Math.trunc(Math.random() * 5);     
  }
//   console.log('Colorrandom: ', COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = getRandomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    //   console.log(colorRef.current);
    }, 1000);
    return () => {
      // cleanup
      console.log("Clock cleanup");
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
