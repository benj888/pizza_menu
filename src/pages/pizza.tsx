import { useEffect, useReducer, useState } from "react";
import { pizzaData } from "../../public/data";
import { PortalDraw } from "@/components/portalDrawer";

const Pizza = () => {
  const [visible, setVisible] = useState(false);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [illustrate, setIllustrate] = useState<string | null>(null);

  const headText = ["TODAY","MENU","ON SALE"]

  const [textAct, setTextAct] = useState(0)  

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTextAct((action)=>(action+1)%headText.length);
    },2500);
    return ()=>clearInterval(interval)
  },[headText.length])

  return (
    <>
      {/* <div className="bg-[#f3f0e5] h-full pt-20"> */}
      <div className="bg-[url('/pe.jpg')] bg-cover bg-center h-full relative ">
        <div className="bg-white/50 h-full fixed top-0 left-0  w-[110%]  rotate-[3deg] z-0 transform origin-top-left"></div>
        <div className="bg-white/50 h-full fixed bottom-0 right-0  w-[110%]  rotate-[3deg] z-0 transform origin-bottom-right "></div>
        <div className="pt-20 relative z-10 ">
          <div className="border-b-2 w-32 mx-auto border-black"></div>

          <div className="font-antiqueOlive uppercase text-center text-3xl pt-1 pb-1 relative h-10 overflow-hidden">
          
          {headText.map((item,index)=>(
            <>
            <div 
            key={index}
            className={`inset-1 absolute transition-all duration-1000 ease-in-out ${textAct===index ?"opacity-100 translate-x-0":"opacity-0 -translate-y-20" }`}
            >
            {item}
            </div>
            </>
          ))}
            
          </div>

          <div className="border-t-2 w-32 mx-auto border-black"></div>
        </div>
        <div className="overflow-auto flex justify-center pt-20 relative z-10">
          <div className="grid  grid-cols-2 w-1/2 gap-4 ">
            {pizzaData.map((item, index) => (
              <div className="flex gap-4" key={index}>
                <img
                  className="w-48 aspect-square self-start "
                  src={item.photoName}
                  alt={item.name}
                  onClick={() => {
                    setVisible(true);
                    setSelectedName(item.name);
                    setIllustrate(item.illustrate);
                  }}
                />
                <div className="flex-1 ">
                  <p className=" font-antiqueOlive">Name: {item.name}</p>
                  <p className=" font-antiqueOlive">ingredients: {item.ingredients}</p>
                  <p className=" font-antiqueOlive">Price: {item.price}</p>
                </div>
                <PortalDraw visible={visible} handleSetVisible={setVisible}>
                  <div>
                    <div className="text-center text-2xl font-bold underline pt-10">
                      {selectedName}
                    </div>
                    <div className="text-left text-lg text-gray-700 leading-[2.5] p-10">
                      {illustrate}
                    </div>
                  </div>
                </PortalDraw>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
