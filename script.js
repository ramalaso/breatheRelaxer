const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime/5)*2;
const holdTime = totalTime/5;


function breathAnimtaion() {
    text.innerText = 'Inspira';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText ='Mantén la respiración';
        
        setTimeout(() => {
            text.innerText ='Expira';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimtaion, totalTime);


