import { useState,useContext } from "react";
import {userContext} from "../utils/useContext";
const Section=({title,description,isVisible,setVisible})=>{
    
    return(
        <div className="m-5 border border-spacing-1 pl-2">

            <p className="font-semibold" >{title}</p>
            {
                isVisible ?( <div> <button  className="underline text-sm"  
                           onClick={()=>setVisible(false)}>Hide</button>
                               <p className="pt-5">{description}</p>
                           </div>
                           )
                :(
                  <div>
                    <button  className="underline text-sm" 
                 onClick={()=>setVisible(true)}>Show</button>
                  
                 </div>
                )
            }
            
      
          
      
            {/* you can have hard coded values here , we use props to pass in values as props for this so that section component can be used as many times */}
          
       
        </div>
    )
}

const Instamart=()=>{
    //Parent is controlling child , parent holds the state of the child 
    // const [SectionConfig,setSectionConfig]=useState({
    //     showAbout : false,
    //     showTeam: false,
    //     showCareer:false
    // })
    const [SectionVisible , setSectionVisible]=useState();
    const {user,setUser}=useContext(userContext);
    return(
        <div>
           
            <h1 className="font-bold m-5 text-xl">Instamart</h1>
            <Section title={"About Instamart"} 
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            // isVisible={SectionConfig.showAbout}
            // setVisible={()=>setSectionConfig({
                 
            //     showAbout : true,
            //     showTeam: false,
            //     showCareer:false
            // }
            // )}
            isVisible={SectionVisible === "about"}
            setVisible={()=>setSectionVisible(prevState => prevState === "about" ? "" : "about")}
            />
            <Section title={"Team Instamart"} 
            description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            // isVisible={SectionConfig.showTeam}
            // setVisible={()=>setSectionConfig({
                 
            //     showAbout : false,
            //     showTeam: true,
            //     showCareer:false
            // }
            // )}
            isVisible={SectionVisible === "team"}
            setVisible={()=>setSectionVisible(prevState => prevState === "team" ? "" : "team")}
            
            />
            <Section title={"Career Instamart"} description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            // isVisible={SectionConfig.showCareer}
            // setVisible={()=>setSectionConfig({
                 
            //     showAbout : false,
            //     showTeam: false,
            //     showCareer:true
            // }
            // )}
            isVisible={SectionVisible === "career"}
            setVisible={()=>setSectionVisible(prevState => prevState === "career" ? "" : "career")}
            />
       <input type="text" value={user.name} className="border ml-2"
           onChange={(e)=>{setUser({

            name:e.target.value,
          });
            
           }}
           placeholder="Enter username"
          />
          <input type="text" value={user.email} className="border ml-2"
           onChange={(e)=>{setUser({

            email:e.target.value, 
          });
            
           }}
           placeholder="Enter mailid"
          />
        </div>
        
    )
};
export default Instamart;
