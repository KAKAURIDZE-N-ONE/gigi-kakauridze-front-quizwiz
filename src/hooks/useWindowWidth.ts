import { useState, useEffect } from "react";

// Custom hook to return the window width
const useWindowWidth = (): number => {
  // State to store the window width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // useEffect to add event listener for window resize
  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener when the component is mounted
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
