import React, { useState, useEffect } from "react";


const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => {
        if (prev == "red") return "green";
        if (prev == "green") return "yellow";
        if (prev == "yellow") return "red";
        return prev;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${currentLight === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${currentLight === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${currentLight === "green" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLight;
