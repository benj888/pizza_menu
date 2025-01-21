import { createPortal } from "react-dom";

const Drawer = ({
    children,
    visible,
    handleSetVisible
}:
{
    children:JSX.Element;
    visible:boolean;
    handleSetVisible:(visible:boolean)=>void;
}) =>{
    return createPortal(
        <>
        <div className={`fixed top-0 right-0 lg:w-1/3 w-4/5 bg-[#f3f0e5] h-full duration-200 z-[999] ${visible ? "translate-x-0 rounded-sm shadow-md":"translate-x-full"}`}
        
        >
            {children}
        </div>
        
        {visible && (

            <div className="fixed top-0 left-0 bg-black opacity-10 w-full h-full z-[998] "
            onClick={()=>handleSetVisible(false)}
            ></div>

        )}

        </>, document.body
        
    )
}

export default Drawer