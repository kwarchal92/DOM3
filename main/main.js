console.log('Zmiana tła paragrafów przt pomocy DOM');

// Tworzymy funkcję setBackground ES6
const setBackground = () =>{
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    
    // p1.style.backgroundColor = 'red';   ----> dodaje liniowo do HTML
    // p1.classList.add('bg-red'); -----> podpina do p1 klasę z CSS (TAK ROBIMY!)
    // p1.classList.toggle('bg-red');  ------> dodaje/usówa klasę - przełącza między ustaw/usuń.

    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
}


let button = document.getElementById('set-background');


// Podpinamy pod naszego buttona zdarzenie click
button.addEventListener(`click`, setBackground); 

//nie piszemy setBackground() z nawiasami bo funkcja uruchomi sie po załadowaniu strony a nie po kliknięciu w przycisk.
