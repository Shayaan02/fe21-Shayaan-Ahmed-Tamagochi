import { tamagochi } from "./tamagochi";


const feed = document.getElementById('feed');
const play = document.getElementById('play');

const newTama = new tamagochi("Mogly","rat")


feed.addEventListener('click', function(){
         newTama.feed();
 })
 play.addEventListener('click', function(){
    newTama.play();
})





