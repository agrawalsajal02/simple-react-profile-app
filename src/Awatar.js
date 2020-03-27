import React, { Component } from 'react'
import "./Awatar.css";
import 'tachyons'
import Awatarlist from './Awatarlist';
import Awatardata from './Awatardata'
import "./Awatar.css"
class Awatar extends Component{
    constructor(){
        super();
        this.state={
            name:"welcome to awatar world"
        }
    }
    namechange(){
        this.setState( {      
            name:"subscribed to channel"
    })
    }
    render(){
 

    const arrayawatarcard=Awatardata.map((awatarcard,i)=>{
        return (<Awatarlist key={Awatardata[i].id} id={Awatardata[i].id} name={Awatardata[i].name} work={Awatardata[i].work} />)
    });
 
 return (<div className="mainpage">
     <h1>simple react profile page</h1>
        <h1>{this.state.name}</h1>
    
        {arrayawatarcard}
            <br/><button onClick={()=>this.namechange()}>Subscribe</button>
        </div>   );    
    }
}
export default Awatar;