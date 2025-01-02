const Header = () => {
        const saveImage = ()=>{
                
        }
        const downloadImage = ()=>{

        }
    return (
        <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
            <div className="flex justify-between items-center h-full">
                <h1>Devark</h1>
                <span className="text-white">File name</span>
                <div className="flex justify-center items-center gap-4">
                    <button className="btn-purple" onClick={saveImage}>Save</button>
                    <button className="btn-purple" onClick={downloadImage}>Download</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
