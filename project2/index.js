// project requirment
// change the background color by genarating a random color
// step-1 create onload handler
//global variable 
let div = null;

this.onload = () => {
    main();
}
function main(){

    // step-3 collect all nessesary raferance

    const changeBg = document.getElementById("change-bg")
    const colorBtn = document.getElementById("color-btn")
    const output = document.getElementById("output")
    const copyBtn = document.getElementById("copy-btn")
    // step-4 handle the click event

    colorBtn.addEventListener('click',function(){
        let getColor = randomColor()
        changeBg.style.backgroundColor = getColor;
        output.value = getColor
    })

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
        if (div !== null) {
			div.remove();
			div = null;
		}
        toastMsg(`${output.value} copied`)
        // copyBtn.innerHTML = "Code Copied";
    })
    output.addEventListener('keyup', function(){

    })
}

// srep-2 genarate random color

function randomColor() {
    let red = Math.floor(Math.random() * 255 +1);
    let green = Math.floor(Math.random() * 255 +1);
    let blue = Math.floor(Math.random() * 255 +1);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function isValidText(color){
    if(color.length === 7 && color[0] === '#'){

        return /^[0-9a-z]/i
    }
}

// create a toast message 

function toastMsg(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in'

    div.addEventListener('click', function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend', function(){
            div.remove()
            div = null;
        })
    })

    document.body.appendChild(div)
}







