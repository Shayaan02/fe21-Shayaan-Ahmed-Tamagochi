import { tamagochi } from "./tamagochi";


const feed = document.getElementById('feed') as HTMLButtonElement;
const play = document.getElementById('play') as HTMLButtonElement;

const newTama :tamagochi = new tamagochi("Mogly","rat")


feed.addEventListener('click', function(){
         newTama.feed();
 })
 play.addEventListener('click', function(){
    newTama.play();
})





