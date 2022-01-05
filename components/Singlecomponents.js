

 function Singlecomponents({card, handleChoice, flipped, disabled}){
    const handleClick=()=>{
        if(!disabled){
handleChoice(card)
        }
    }
    return(
         <div className={flipped ? "flipped":""} >
         <div className="card">
        <img className="front" src ={card.src} alt="card-front"/>
         <img className="back"
           src="/img/picture10.png"
            onClick={handleClick}
             alt="card-back"
             />
         </div>
           </div>
    )
}
export default Singlecomponents;