import React from 'react';
import {connect} from 'react-redux';

class Add extends React.Component{
    constructor(){
        super();
        this.state={
            work:''
        };
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.name
        });
    };
    submitForm = (e) => {
        e.preventDefault()
        this.props.dispatch({
            thpe: 'ADD_TODO',
            todo: this.state
        });
        this.props.history.push('/');
    };
    handleClick =(e)=>{

    };
    render(){
        return(
        <div>
            <h3>Add in TODO</h3>
            <form onSubmit={this.submitForm}> 
                
                <input type="text" 
                    placeholder="Add Work" name="work"
                    value={this.state.work} 
                    onChange={this.handleInputChange}>

                </input>
                <input type="submit" value="Save" onClick={this.handleClick}/>
            </form>
        </div>
        );
    }
}

export default connect()(Add);