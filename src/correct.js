import React from 'react';
import Lottie from 'react-lottie';

class Correct extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            animationData: {},
            isStopped: false, isPaused: false};

    }

    async componentDidMount(){
        const response = await fetch("https://assets9.lottiefiles.com/packages/lf20_ImGSc2.json");
        const json = await response.json();
        this.setState({animationData:json});
    }
    
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: this.state.animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

          console.log(this.state.animationData)

        var next = parseInt(this.props.match.params.id) + 1; 
        return(
            <div>
               <h2>You earned 100 points</h2>
               <h2>Total: {next * 100} points</h2>
                  <Lottie 
                      height={400}
                      width={400}
                      isStopped={this.state.isStopped}
                      isPaused={this.state.isPaused}
                      options={defaultOptions}/>

                <a href={"/questions/" + next} className="marginBtnNext">
                     <h2>Next Question</h2>
                </a>
           </div>
        );
    };
}


export default Correct;