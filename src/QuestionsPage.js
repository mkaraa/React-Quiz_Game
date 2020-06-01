import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';

const API = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class QuestionPage extends Component{
    constructor(props){
        super(props);
        
        this.state = { questions: {},
                        answers: [], time: 15} ;

    }

    async componentDidMount(){
        const response = await fetch(API);
        const json = await response.json();
        this.setState({questions:json.results[this.props.match.params.id]}) ;
        const answer = json.results[this.props.match.params.id].incorrect_answers;
        answer.push(json.results[this.props.match.params.id].correct_answer);
        shuffleArray(answer);
        this.setState({answers:answer}) ;


    }

    componentWillMount(){
        setInterval(() => {
            this.setState({time : this.state.time-1});
            if(this.state.time == 0){
                this.props.history.push("/timeisup/" + this.props.match.params.id);
                window.location.reload();
            }
        }  ,1000);
    }

    isTrue(id){
        if(this.state.questions.correct_answer == id){
            console.log("Correct Answer")
            var next = parseInt(this.props.match.params.id)+1;
            this.props.history.push("/correct/" + this.props.match.params.id);
            window.location.reload();
        }else {
            console.log("Incorrect Answer")
            this.props.history.push("/false/" + this.props.match.params.id);
            window.location.reload();
        }
    }


    render(){
        console.log(this.state);
        const {questions} = this.state;
        const {answers} = this.state;
        console.log(questions);

        console.log(answers[0]);

        console.log(this.state);
        return(
            <div>
                
                <table>
                    <tbody>
                        <span>{this.state.time}</span>
                    <tr>
                        <th id="questionFont">Question {this.props.match.params.id}/10</th>
                        <th></th>
                        <th id="pointFont">Points {this.props.match.params.id * 100}</th>   
                    </tr>
                    <tr>
                        <td>{questions.question}</td>
                    </tr>
                     {answers.map( (id, idx) => (
                     <tr onClick={(a) => this.isTrue(id)} key={idx}>
                             <td id="tdId"> {id}  </td>
                     </tr>
                         ))}
                    <tr>
                     </tr>
                </tbody>
            </table>
        </div>
        );
    }
}


export default QuestionPage ;