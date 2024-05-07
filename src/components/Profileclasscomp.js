import React from "react";
class ProfileClasscomp extends React.Component{
   
//creating usestate variable 
       constructor(props){
          super(props); //if uare going to use this.props inside constructor we pass props inside super()
          this.state={
            count:0,
            count1:2
          };
       }

       render(){
        const {count}=this.state.count;//if u want u can destructure and use it
        return (
            <>
            <h1>This is from profile class component</h1>
            <h2>name:{this.props.name}</h2>
            <h3>count:{this.state.count}</h3>
            <h3>count:{this.state.count1}</h3>
            {/* WE CANT DIRECTLY MUTATE STATE VARIABLE 
            <button onClick={this.state.count=1}>click</button> */}
            <button onClick={()=>{
                this.setState(
                    {
                        count:1,
                        count1:3
                    });
                }
            }>click</button>
            </>
        )
       
        
       }
}
export default ProfileClasscomp;