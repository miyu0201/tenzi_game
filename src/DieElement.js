import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix} from '@fortawesome/free-solid-svg-icons';

export default function DieElement(props){
    //get value of isHeld from props, change style according to its state
   const isHeld=props.isHeld
   //singel dice element
   //get dice id on click
   //show number: <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}>{props.number}	</div>
   if (props.number===1){
    return (
        <div>
            <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}><FontAwesomeIcon className="dieIcon" icon={faDiceOne}  />	</div>
  
        </div>
        )
   }
   else if(props.number===2){
    return (
        <div>
        <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}><FontAwesomeIcon className="dieIcon" icon={faDiceTwo}  />	</div>

    </div>
   )

   }

   else if(props.number===3){
    return (
        <div>
        <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}><FontAwesomeIcon className="dieIcon" icon={faDiceThree}  /></div>

    </div>
   )

   }
   else if(props.number===4){
    return (
        <div>
        <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}><FontAwesomeIcon className="dieIcon" icon={faDiceFour}  />	</div>

    </div>
   )

   }
   else if(props.number===5){
    return (
        <div>
        <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}><FontAwesomeIcon className="dieIcon"  icon={faDiceFive}  />	</div>

    </div>
   )

   }
   else if(props.number===6){
    return (
        <div>
        <div className= {isHeld===true? "die-isHeld":"die"} onClick={props.holdDice}><FontAwesomeIcon className="dieIcon" icon={faDiceSix}  />	</div>

    </div>
   )

   }
  
}