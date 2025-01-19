import { aichooser } from "./ai-choose.js";
import {elAiHAnd, elGameZone,elgameZonePicker, elhumndHand, elrefreshGame, elsHands } from "./html-selection.js";
import { initialState } from "./setingis.js";
import { uiChanger } from "./ul.changer.js";

elsHands.forEach((hand)=>{
    hand.addEventListener("click",function(e){
        const clickedElement = e.target
        const choseHand = clickedElement.querySelector(".game-zone__img")
        elhumndHand.src = choseHand.src
        // (choseHand.alt
        const choseHandAi = aichooser(initialState.mode)
        // console.log(choseHandAi,choseHand.alt)
        setTimeout (function (){
        elAiHAnd.src =`img/${choseHandAi}.svg`
        console.log(elAiHAnd.src)
        },1000)
        uiChanger("elGameZone")
    })
})

elrefreshGame.addEventListener("click",function (){
    uiChanger("elgameZonePicker");
})