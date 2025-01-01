const Index = () => {
    return (
        <div className="bg-red-200 min-h-screen w-full">
            {/*  Top Navbar */}
            <div className="bg-gray-300 shadow-md">
                <div className=" w-[93%] m-auto py-2">
                    <div className="flex justify-between items-center">
                        {/*! Image */}

                        <div className="w-[150px] h-[40px] p-2">
                        <img src={"/src/assets/devark-logo.png"} alt="" />
                            </div>  

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button className="btn-primary">Signin</button>
                            <button className="btn-purple">Sign Up</button>
                        </div>

                    </div>

                </div>
            </div>
            {/* Body */}
            <div className="w-full h-full p-4 flex flex-col gap-4 justify-center items-center">

                <h2 className="text-5xl font-bold">What will you design today</h2>
                <span className="text-2xl font-medium">
                    Devark make it easy to create and share proffessional designs
                </span>
                <button className="btn-purple">Sign Up</button>

            </div>
        </div>
    );
};

export default Index;
