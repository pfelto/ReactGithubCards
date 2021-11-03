import React from 'react';

const URL_BASE = 'https://api.github.com/users/'

class GithubAdder extends React.Component{
    //Using React Ref
    //userNameInput = React.createRef();

    //Using Controlled Components
    state = {
        userName: '',
    };

    async handleSubmit(e){
        e.preventDefault();
        
        //Use DOM API
        //console.log(e.target.username.value);
        //this.props.clickHandler(e.target.username.value);

        //use React Refs
        //console.log(this.userNameInput.current.value);
        //this.props.clickHandler(this.userNameInput.current.value);

        //Using Controlled Components
        //console.log(this.state.userName);
        let URL = `${URL_BASE}${this.state.userName}`
        //console.log(URL);
        let resp = await fetch(URL);
        //console.log(resp);
        if(resp.status === 200){
            let profile = await resp.json();
            //console.log(profile);
            this.props.clickHandler(profile);
        }
        this.setState({ userName: '' });
    }

    render(){
        return(
            <form  onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' 
                name='username' 
                /*Controlled Component */
                value={this.state.userName}
                onChange={event => this.setState({ userName: event.target.value})}
                /*End Controlled Component */
                placeholder='Username...' 
                /*ref={this.userNameInput} */
                required/>
                <button>Add Github User</button>    
            </form>
        );
    }
}

export default GithubAdder