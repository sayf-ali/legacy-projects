const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1 
/*currentActive will serve as an index 
(or starting point) for all items active.*/

prev.addEventListener("click", () => {
    currentActive-- 
    
    if (currentActive < 1) {
        currentActive = 1 
    /*Check console to confirm currentActive decrements by 1 
    after every click of the "prev" button and stops at 1. 
    <Test: console.log(currentActive)> */
    }    
    update() 
});

next.addEventListener("click", () => {
    currentActive++ 
    
    if (currentActive > circles.length) {
        currentActive = circles.length 
    /*Check console to confirm currentActive increments by 1 
    after every click of the "next" button and stops at 4. 
    (Test: console.log(currentActive)) */
    }  
    update()    
});

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add("active");
        }
        else {
            circle.classList.remove("active");
        }
    })
    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

    if(currentActive === 1){
        prev.disabled = true;
    }
    else if (currentActive === circles.length){
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
