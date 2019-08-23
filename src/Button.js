import React,{Component} from 'react';



class Button extends Component {
    constructor(){
        super();
        this.state = {
            string: 'Hello i am Dan '
        };
    }
render(){
    return(
        <div>
            <p>{this.state.string}</p>
            <button onClick={()=>this.setState({ string : "Hi I am Mike"})}> Next Member </button>
        </div>
    )
}
}

export default Button 