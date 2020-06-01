import React from 'react';

class TimeUp extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
       
        return(
            
            
            <div className="wrapper">
            <h2 className="marginFalsePage">TIME UP!</h2>
                    <a href={"/"}  className="marginBtn">
                      <h2>Try Again</h2>
                    </a>
           </div>
        );
    };
}

export default TimeUp;