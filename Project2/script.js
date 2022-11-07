const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const steps = document.querySelectorAll('.circle');

let counter = 1;

next.addEventListener('click', () => {
    counter++;

    if(counter > steps.length){
        counter = steps.length;
    }
    
    update();
});

prev.addEventListener('click', () => {
    counter--;

    if(counter < 1){
        counter = 1;
    }
    
    update();
});

function update() {
    //for changing colors of steps
    steps.forEach((step, index) => {
        if(index < counter){
            step.classList.add('active');
        }else{
            step.classList.remove('active');
        }
    });

    //for changing size of bar
    progress.style.width = ((counter-1)/(steps.length-1))*100 + '%';

    //control for disabled property of next and prev buttons
    if(counter === 1){
        prev.disabled = true;
    }else if(counter == steps.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
