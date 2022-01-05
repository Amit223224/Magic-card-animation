import React,{useEffect, useState} from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'
//import logo from './logo.svg';
import Singlecomponents from './components/Singlecomponents'
import './App.css';


const CardImages=[
  
   { "src": "/img/picture1.png",matched:false },
   { "src": "/img/picture2.png", matched:false},
   { "src": "/img/picture7.png" , matched:false},
   { "src": "/img/picture4.png" ,matched:false},
   { "src": "/img/picture5.png" ,matched:false},
  { "src": "/img/picture6.png" ,matched:false}

  
]

function App() {
  const [cards, setCards]=useState([])
  const [turns, setTurns]=useState(0)
   const [choiceone, setchoiceone]=useState(null)
  const [choicetwo, setchoicetwo]=useState(null)
   const [disabled, setdisabled]=useState(false)
  //suffle card
  const suffleCards=()=>{
    const suffledCards=[...CardImages,...CardImages ].sort(()=>Math.random() -0.5)
    .map((card)=>({...card, id: Math.random()}))
    setchoiceone(null);
    setchoicetwo(null);
    setCards(suffledCards )
    setTurns(0)
  }
  // handle a choice 
  //console.log(cards , turns); 
  const handleChoice =(card)=>{
choiceone ? setchoicetwo(card) :setchoiceone(card)
  }
  //compare to card
  useEffect(()=>{
   
    if(choiceone && choicetwo){
       setdisabled(true)

      if(choiceone.src ===choicetwo.src)
      {setCards(preCards =>{
        return preCards.map(card=>{
          if (card.src === choiceone.src)
          {
            return{...card, matched:true}
          } else{
            return card
          }
        })
      })
       // console.log('those cards match');
        resetTurn()
      } else {
       // console.log('those cards not match')
       setTimeout(()=> resetTurn(),1000)
      }
    }

  },[choiceone, choicetwo])
  console.log(cards);
  // reset choice & increase turn
  const resetTurn =()=>{
    setchoiceone(null)
    setchoicetwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setdisabled(false);
  }
  //start a new game automatically
  useEffect(()=>{
    suffleCards()
  },[])
  return (
    <div className="App">
     <h1>Magic Animation</h1>
     <button onClick={suffleCards} >New Game</button>
      <div className="card-grid">
      {cards.map(card=>(
       <Singlecomponents 
        key={card.id}
         card={card}
         handleChoice={handleChoice}
         flipped={card === choiceone || card === choicetwo || card.matched}
        disabled={disabled}
         />
      ))}
      </div>
      <p >Turns={turns}</p>
     </div>
  );
} 

export default App;
