import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [chosenLevel, setChosenLevel] = useState(JSON.parse(sessionStorage.getItem("chosenLevel")));
  const [words, setWords] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(JSON.parse(sessionStorage.getItem("score")));

  useEffect(()=>{
    sessionStorage.setItem("score", JSON.stringify(score));
  },[score]);

  useEffect(()=>{
    sessionStorage.setItem("choesnLevel", JSON.stringify(chosenLevel));
  },[chosenLevel]);


  const getRandomWords = ()=>{
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/results',
      params: {level: chosenLevel, area: 'sat'},
      
    };
    
    axios.request(options).then(function (response) {
      setWords(response.data)

    }).catch(function (error) {
      console.error(error);
    });
  }


  useEffect(()=>{
     if (chosenLevel) {
    getRandomWords()
  }
  },[chosenLevel]);
  

const checkAnswer = (option, optionIndex, correctAnswer)=>{

  if(optionIndex == correctAnswer){
    setCorrectAnswers([...correctAnswers, option])
    setScore((score)=> score +1)
  } else{
    setScore((score)=> score -1)
  }
  setClicked([...clicked, option]);
};

useEffect(()=>{
  const score = JSON.parse(sessionStorage.getItem("score"));
  if (score){
    setScore(score);
  }

},[])

useEffect(()=>{
  const chosenLevel = JSON.parse(sessionStorage.getItem("chosenLevel"));
  if (chosenLevel){
    setChosenLevel(chosenLevel);
  }

},[])



  return (
    <div className="app">

      { !chosenLevel && <div className="level-selector">
        <h1 className="title"> Word Association Game </h1>
        <p className="title"> Select the level you like to start from</p>
      <select name="levels" id="levels" value={chosenLevel} onChange= {(e)=> setChosenLevel(e.target.value)}>

        <option value={""}> Select a Level </option>
        <option value="1"> Level 1</option>
        <option value="2"> Level 2</option>
        <option value="3"> Level 3</option>
        <option value="4"> Level 4</option>
        <option value="5"> Level 5</option>
        <option value="6"> Level 6</option>
        <option value="7"> Level 7</option>
        <option value="8"> Level 8</option>
        <option value="9"> Level 9</option>
        <option value="10"> Level 10</option>

      </select>
      </div>}

      {chosenLevel && words && 
      <div className="question-area">
        <h1> Level: {chosenLevel} </h1>
        <p>Build a logical relation between each word set then choose the best match.</p>
        <h3> Your score: {score} </h3>

        <div className="questions">
        {words.quizlist.map((question, _questionIndex) =>( 

        <div key={_questionIndex} className="question-box"> 

        {question.quiz.map((item, _index) =>(
          <p key={_index}> {item} </p>

        ))}
        <div className="question-buttons">

        {question.option.map((option, optionIndex) =>(
          <div key={optionIndex} className="question-button">
            <button 
            disabled =
            {clicked.includes(option)}
            onClick={()=> checkAnswer(option, optionIndex +1, question.correct)}
            > 
            {option}</button>
            {correctAnswers.includes(option) && <p>Correct!</p>
           
            }
               </div>
          
        ))}

            </div>
           </div>
        ))}
          
         </div>

        <button className="nextLevel" onClick={()=>setChosenLevel(Number(chosenLevel) + Number('1') )}> Next Level</button>
        <button className="homeBtn" onClick={()=>setChosenLevel(null)}> Home </button>
        

      </div>}
      


    </div>
  );
 }

export default App;
