//Bài 3
const container = document.getElementById('container');
const mycolor = document.getElementById('color');
const pick = document.getElementById('pickcolor')
const random = document.getElementById('random')
const btn = document.getElementById('btn')
const copy = document.getElementById('copy_color')
const arrayColor = ['red','yellow','pink','gray','black','orange','blue','black','green'];
    random.addEventListener('click', () => {
        let randomPick = arrayColor[randomColor(arrayColor)];
        container.style.backgroundColor = randomPick;
    })

    function randomColor(array){
        return Math.floor(Math.random()*array.length);
    }

    btn.addEventListener('click', () => {
        container.style.backgroundColor = pick.value;
        copy.innerHTML = pick.value;
    })

        




    

    
    
    

    


