import React from 'react';
import CardList from './CardList';
import GithubAdder from './githubAdder';
import testData from './TestData'


class App extends React.Component{

    /*
    old state syntax for class
    constructor(props){
        super(props);
        this.state = {
            profiles: testData,
        }
    }
    */

    //new state syntax
    state = {
        profiles: testData,
    };

    AddGithubUser = (profile) => {
        //console.log('App',profile);
        const newUserCard = {
            id: profile.id,
            name: profile.name,
            login: profile.login,
            avatar_url: profile.avatar_url,
            html_url: profile.html_url,
        }
        //console.log('New Card', newUserCard);
        this.setState(prevState => ({
            profiles: [...prevState.profiles, newUserCard]
        }))
    



        /*
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          */

    }

    render(){
        const {title} = this.props
        const {profiles} = this.state
        return(
            <div className='app'>
                <div className='header'>
                    {title}
                </div>
                <div className='githubAdder'>
                    <GithubAdder clickHandler={this.AddGithubUser}/>
                </div>
                <div className='cardList'>
                    CardList
                    <CardList cards={profiles}/>
                </div>
            </div>
        )
        }
} 

export default App