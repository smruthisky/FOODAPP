const Skeleton=()=>{

   return (
   
        <div className="skeletoncards w-56 h-[350px] p-2 m-1 flex-col    bg-slate-100 shadow-lg rounded-md ">
         <img className="image w-48 h-52 pl-2 rounded-lg pt-4  bg-slate-200 " />
       
       <h2 className="restname pl-2 mt-4 w-40 h-5 rounded-md bg-slate-200"> </h2>
       <h4 className="cuisinesname  pl-2 h-7 w-32 mt-4 rounded-md bg-slate-200"></h4>
       
       <h4 className="rating pl-2 w-12 h-4 mt-4 bg-slate-200 rounded-md"></h4>
       </div>
       
   
   
   );
   
};

export default Skeleton;