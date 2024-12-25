import { useEffect, useState } from "react";


const Try = () => {
  const [round, setRound] = useState(0);
  const texts = ["成蟲", "幼蟲", "標本", "耗材"];
  useEffect(() => {
    const interval = setInterval(() => {
        setRound((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); 
    
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="h-full bg-white  relative">
      <div>
        {texts.map((item, index) => (
          <div
        key={index} 
          className={`absolute  transition-all duration-1000 ${round===index?"translate-y-0 opacity-100":"translate-y-full opacity-0"}`}>

            {item}

          </div>

        ))}
      </div>
      
    </div>
  );
};

export default Try;









