const Skeleton=()=>{

   return (
   
        <div className="skeletoncards w-56 h-[350px] p-2 m-1  bg-white shadow-lg rounded-md ">
         <img className="image w-48 h-52 pl-2 rounded-lg pt-4 animate-pulse bg-slate-300 " />
       
       <h2 className="restname pl-2 mt-4 w-40 h-6 animate-pulse rounded-md bg-slate-300"> </h2>
       <h4 className="cuisinesname  pl-2 h-7 w-32 animate-pulse mt-4 rounded-md bg-slate-300"></h4>
       
       <h4 className="rating pl-2 w-12 h-4 mt-4 animate-pulse bg-slate-300 rounded-md"></h4>
       </div>
       
   
   
   );
   
};

export default Skeleton;