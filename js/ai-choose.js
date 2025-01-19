import { hand } from "./hands.js";

export function aichooser(mode, humndHand){

if(mode === "easy"){
   const randomIndex = Math.trunc(Math.random()*hand.length)
    return hand[randomIndex] 
} else if(mode ==="hard"){

} else{
    console.error("bunday holt mavjud emas")
}
}