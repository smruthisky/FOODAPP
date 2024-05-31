
const Menushimmer=()=>{

    return (
        <div >
        <div data-testid="shimmer"  className=" box border ml-[430px] mt-4 bg-white w-[700px] h-36 shadow-md rounded-lg">
            <div className="flex">
            <div className="description w-[500px] mt-2">
            <div className=" itemname pl-5 mt-3 ml-3 bg-slate-300 h-8 w-[300px]"></div>
            <div className=" des bg-slate-300 h-6 mt-4 ml-3 w-[350px]"></div>
            <div className="price ml-3 mt-3  bg-slate-300 h-6 w-20"></div>
            </div>
            <div className="image mt-3 h-24 w-24 rounded-md ml-2 bg-slate-300"></div>
            </div>
        </div>
        
            </div>
    )
};
export default Menushimmer;