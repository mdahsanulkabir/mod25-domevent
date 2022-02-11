function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

//just set the name of the function
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//using annonymus function
const greenButton = document.getElementById('make-green-button');
//annonymous function
greenButton.onclick = function (){
    document.body.style.backgroundColor = 'green';
}

//handle by using addeventlistener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenrod';
}

//add eventlistener
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click',function (){
    document.body.style.backgroundColor = 'hotpink';
})

//direct shortcut
document.getElementById('make-lightblue').addEventListener('click',function (){
    document.body.style.backgroundColor = 'lightblue';
});