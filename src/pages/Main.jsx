import { BsGrid1X2, BsImageFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";
import Header from "../shared/ui/Header";

import { FaFolder } from "react-icons/fa6";
import { GoCloud } from "react-icons/go";
import { RxTransparencyGrid } from "react-icons/rx";
import { TfiText } from "react-icons/tfi";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SubMenuTemplate from "../shared/ui/SubMenuTemplate";

const Main = () => {


    const [state, setState ] = useState('');
    const [show, setShow ] = useState({
        status:true,
        name:""
    });
    const setElements = (type, name)=>{
        setState(type)
        setShow({
            state:false,
            name
        })

    }

    const sidebarItems = [
        {
            icon: <BsGrid1X2 />,
            label: "Design",
        },
        {
            icon: <FaShapes />,
            label: "Shapes",
        },
        {
            icon: <GoCloud />,
            label: "Upload",
        },
        {
            icon: <TfiText />,
            label: "Text",
        },
        {
            icon: <FaFolder />,
            label: "Project",
        },
        {
            icon: <BsImageFill />,
            label: "Images",
        },
        {
            icon: <RxTransparencyGrid />,
            label: "Background",
        },
    ];




    return (
        <div className="min-w-screen h-full bg-black">
            <Header />
            <div className="flex h-[calc(100%-60px)] w-screen">
                {/* ! Icons Menu */}
                <div className="w-[80px] bg-[#181918] z-50 h-full text-gray-400  overscroll-y-auto">
                    {/* <div className="w-full h-[80px] cursor-pointer flex flex-col justify-center items-center hover:text-gray-100">
                        <span className="text-2xl">
                            <BsGrid />
                        </span>
                        <span className="text-2xl">Design</span>
                    </div> */}

                    {sidebarItems.map((s) => (
                        <div
                            className={`${ show.name===s.label ?' bg-[#252627] ':''} w-full h-[80px] cursor-pointer flex flex-col justify-center 
                            gap-1 items-center hover:text-gray-100`}
                            key={s.label}
                            onClick={()=>setElements(s.label, s.label)}
                        >
                            <span className="text-2xl">{s.icon}</span>
                            <span className="text-xs font-medium">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Icons Right Submenu */}
                <div className="h-full w-[calc(100%-75px)]  bg-green-400">
                    <div className={ ` ${show.status?'p-0 -left-[350px]':'px-8 left-[75px] py-5' } bg-[#252627] h-full fixed  transition-all w-[350px] z-30 duration-700 text-white`  }>
                        <div className="flex absolute justify-center items-center w-[20px] h-[100px] cursor-pointer top-[40%] rounded-full -right-2 bg-[#252627]" onClick={()=>setShow({status:true, name:""})}>
                            <MdKeyboardArrowLeft/>
                        </div>

                    <h1>{state}</h1>

                    <div className="grid grid-cols-2 gap-2">
                        <SubMenuTemplate state={state}/>
                    </div>
              
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;


/* 
ICons Menu
ICons Menu Submenu - Right side


*/