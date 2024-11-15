import moment from "moment";
import { useEffect, useState } from "react";
const DynamicTime = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{currentTime.format("D MMMM YYYY")}</p>
      <p>{currentTime.format("h:mm:ss a")}</p>
    </div>
  );
};

export default DynamicTime;
