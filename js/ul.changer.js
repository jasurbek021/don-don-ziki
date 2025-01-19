import { elGameZone, elgameZonePicker } from "./html-selection.js";

export function uiChanger(type){
    if(type === "elGameZone"){
        elGameZone.style.display = "none";
        elgameZonePicker.style.display = "block";
    } else if(type === "elgameZonePicker"){
        elgameZonePicker.style.display= "none";
        elGameZone.style.display = "block";
    } else{
        console.error("bunday tur mavjud emas")
    }
}