const keys = document.querySelectorAll('.key')

//not using arrow function as it is binding this to global scope
const removeTransition = function (e) {
    if (e.propertyName !== 'transform') return; //look for ONLY trasform properties
        this.classList.remove('playing')
}

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (!audio) return //end func if no audio file present
    
    //set audiotime to zero to remove wait between keypresses
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}


window.addEventListener('keydown', playSound)

keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
})