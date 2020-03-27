import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'

/*


function Demo(props){
    return (<div className="maindiv_Style"><h1>hello {props.name}</h1>
            <p> welcome my channel </p></div>
            )
    }

*/ 
class Demo extends Component{
    render(){
    return (<div className="maindiv_Style"><h1>hello {this.props.name}</h1>
            <p> welcome my channel </p></div>
            )
    }
}


export default Demo;
