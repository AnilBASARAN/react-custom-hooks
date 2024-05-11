import React,{Component} from "react";

class SimpleFormClassHooks extends Component{
    constructor(props){
        super(props);
        this.state = {email:""};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({email: event.target.value});
    }

    render(){
        return(
            <form>
                <h1>What i am typing: {this.state.email}</h1>
                <input
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
                />
                  
                
            </form>
        );
    }
}

export default SimpleFormClassHooks;