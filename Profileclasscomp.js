import React from "react";
class ProfileClasscomp extends React.Component{
   
//creating usestate variable 
       constructor(props){
          super(props); //if uare going to use this.props inside constructor we pass props inside super()
          this.state={
            userinfo:{
                name:"dummyname",
                location:"celo"

            },
          };
          console.log("this is child-constructor "+ this.state.userinfo.name);
       }

   async   componentDidMount(){
        const data= await fetch("https://api.github.com/users/smruthisky");
        const json= await data.json();
        console.log(json);
        //API calls done here.
        this.setState({
            userinfo :json ,//after data is fetched as we are using setstate this dom gets updated and render() is called again
        });
        // console.log(this.state.userinfo);
        console.log("this is child-componentDidmount "+this.state.userinfo.login);
       }

       componentDidUpdate(){
        console.log("componentDidUpdate")
       }

       render(){
        // const {count}=this.state.count;//if u want u can destructure and use it
        console.log("this is child-render:"+ this.state.userinfo.login)
        return (
            <>
            <h1>This is from profile class component</h1>
            <h2>name:{this.state.userinfo.login}</h2>
            <img src={this.state.userinfo.avatar_url}></img>
            
            {/* <h2>name:{this.props.name}</h2>
            <h3>count:{this.state.count}</h3>
            <h3>count:{this.state.count1}</h3> */}
            {/* WE CANT DIRECTLY MUTATE STATE VARIABLE 
            <button onClick={this.state.count=1}>click</button> */}
            {/* <button onClick={()=>{
                this.setState(
                    {
                        count:1,
                        count1:3
                    });
                }
            }>click</button> */}
            </>
        )
       
        
       }
}
export default ProfileClasscomp;