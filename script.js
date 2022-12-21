/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening');
let optionOne= document.querySelector('.option-one');
let optionTwo = document.querySelector('.option-two');
let button = document.querySelector('.button');
let optionOnescreen = document.querySelector('.option-one-screen');
let optionTwoscreen = document.querySelector('.option-two-screen');  
let optionOneend = document.querySelector('.option-one-end');
let optionTwoend = document.querySelector('.option-two-end');
let title = document.querySelector('.title');
let clickme1 = document.querySelector('.click-me-1');
let clickme2 = document.querySelector('.click-me-2');
let yesScreen = document.querySelector('.yes-screen');
let noScreen = document.querySelector('.no-screen');







optionOne.onclick = function(){
   storyOpening.style.display='none';
   optionOnescreen.style.display = 'block';
}



optionTwo.onclick = function(){
   storyOpening.style.display='none';
   optionTwoscreen.style.display = 'block';
}

clickme1.onclick = function() {
  yesScreen.style.display = 'block';
  optionOneend.style.display = 'none';
}

clickme2.onclick = function() {
  noScreen.style.display = 'block';
  optionTwoend.style.display = 'none';
}






button.onclick = function(){
  title.innerHTML = 'Helpling animals'
}
