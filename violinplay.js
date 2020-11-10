
  function playSound (e) {
    // 'e' is an object full of data describing what happens
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); //nb: e.keyCode is a number so it should be in quotes
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return; //stops the function from running all together
    //to play an audio element from the start when you press a keyword
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
  }
  
  
  function removeTransition (e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform 
    this.classList.remove('playing');
  };
  
  // to end the transition
  const keys = document.querySelectorAll('.key');
  //to listen to transition end on each key
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //when a transition end we will remove it
  window.addEventListener('keydown', playSound);
