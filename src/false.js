import React from 'react';

class False extends React.Component{
    constructor(props){
        super(props);
    }

    
    
    render(){
        return(
            <div className="wrapper"> 
              <div>
                <h2 className="marginFalsePage">FALSE !</h2>
                <a href={"/"} className="marginBtn">
                    <h2>Try Again</h2>
                </a>
              </div>
            </div>
        );
    };
}

export default False;