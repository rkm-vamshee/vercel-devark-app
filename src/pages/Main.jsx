import { BsGrid } from "react-icons/bs";
import Header from "../shared/ui/Header";

const Main = () => {
    return (
        <div className="min-w-screen h-screen bg-black">
            <Header />
            <div className="flex h-[calc(100%-60px)] w-screen">
                <div className="w-[80px] bg-[#181918] z-50 text-gray-400  overscroll-y-auto">
                    <div className="w-full h-[80px] cursor-pointer flex flex-col justify-center items-center">
                        <span><BsGrid/></span>
                        <span>Design</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;
