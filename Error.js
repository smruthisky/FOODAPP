import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
       <div>
          <p>Opps! Something went wrong</p>
           <p>{err.status} : {err.statusText }</p>
       </div>
    );
};
export default Error;