import React from 'react';

class WelcomePage extends React.Component{
    
    render(){
        return(
            <div>
                <img src='./TriviaGame.png' alt="Trivia Game"/><br></br>
                    <a href="/questions/0"  id="startButton">
                      <h2>Get Started</h2>
                    </a>
           </div>
        );
    };
}


export default WelcomePage;