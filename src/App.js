import React from "react"
import DieElement from "./DieElement"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import './App.css';


export default function App (){
    //initial state with AllNewDice() function returned value， an array with 10 random value
    const[dice, setDice] = React.useState(AllNewDice())
    const [win,setWin]= React.useState(false)
    const [counter, setCounter] = React.useState(0)//track how many time user roll dice
    
  //map thrugh dice and assign value for each dice, 10 dice in total
    const allDice= dice.map((dice) => <DieElement  key={dice.id} number= {dice.value} isHeld={dice.isHeld}  holdDice={() => holdDice(dice.id)}/>)
    
    function AllNewDice(){
      /*  const randoms = Array.from({length: 10}, () => Math.floor(Math.random() * 6+1));//create a array of length 10, containing random number from 1 - 6*/

        //form a array of object that length =10),lloks like this [{value: random value, isHeld: false}]
           const randoms = Array.from({length: 10}, () => ({
               value: Math.floor(Math.random() * 6+1), 
               isHeld: false,
               id:nanoid(),
               }))
           
           return(
           randoms
           )
    }
          
            
    function handleClick(){
        //map through existing dice, if dice isHeld, remain unchanged, only update those thst isHeld==false.
       if (win===false) {
           setDice(prevState=> prevState.map((dice)=>{
           return dice.isHeld===false ? {...dice, value:Math.floor(Math.random() * 6+1) ,id: nanoid()} : dice
       }))
       setCounter(counter + 1)
       }
        else {
            setDice(AllNewDice())  
            setWin(false) 
            setCounter(0)
            }
        
    }
      console.log( AllNewDice())
    
    //accept dice id
    function holdDice(id){
      setDice(prevState=>prevState.map((dice)=>{
        return  dice.id===id ? {...dice, isHeld:!dice.isHeld } : dice
      }))
      
      console.log(id)
    }
    
     
    //checking winning state everytime the dice changed value
    //if all dice isHeld and have the same value, show winning message, and save new record if less time of rolls
    React.useEffect(()=>{
        const allHeld =  dice.every((dice)=>dice.isHeld===true)
        const firstValue= dice[0].value
        const SameValue= dice.every((dice)=>dice.value===firstValue)
        const currentRecord= localStorage.getItem('record')
        if (allHeld &&SameValue){
            setWin(true)
            console.log("you win!")
            if (currentRecord ==null || currentRecord > counter) {localStorage.setItem('record', counter) }      
        }
   console.log(currentRecord)
    },[dice])
   
    // render the 10 dice in  className="dieGroup" div
   
    return (
          <main> 
         {win && <Confetti/>}
        <h1 style={{ fontFamily: "'Inter'"}}>{win===true? "You Win!" : "Tenzi Game"}</h1>
       
        <div> <span style={{ color:"#483D8B"}}>Best Record: {localStorage.getItem('record') }</span><br/> Number of Rolls: {counter}</div>
         
          <div className="dieGroup" >
           {allDice}
          </div>
         <button className="button" onClick={handleClick}>{win===true? "Start Again": "Roll Dice"}</button>
         <p>Tip: Roll dice and click the ones with the same number. You win when all ten dice hold the same number</p>
          </main>
     )
      
    
}