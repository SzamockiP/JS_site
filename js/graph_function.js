let arr_size = 240; // Ilość znaków w linii

document.querySelectorAll("input[type='number']")[0].addEventListener("change",calculate);
document.querySelectorAll("input[type='number']")[1].addEventListener("change",calculate);
document.querySelectorAll("input[type='number']")[2].addEventListener("change",calculate);
document.querySelectorAll("input[type='number']")[3].addEventListener("change",calculate);

calculate();

function calculate(){
    // Pobranie danych do funkcji z formularza
    let a1 = Number(document.querySelectorAll("input[type='number']")[0].value);
    let a2 = Number(document.querySelectorAll("input[type='number']")[1].value);
    let a3 = Number(document.querySelectorAll("input[type='number']")[2].value);
    let a4 = Number(document.querySelectorAll("input[type='number']")[3].value);

    // Deklaracja tablicy z wynikami dla kolumn 
    let arr2d = Array(arr_size);
    // Uzupełnienie wynikami tablicy
    for(let i = 0; i< arr2d.length; i++){
        arr2d[i] = (a1 * Math.pow((i-120)/12,3)) + (a2 * Math.pow((i-120)/12,2)) + (a3 * (i-120)/12) + a4;
        console.log(arr2d[i]);
    }

    let output = "";

    // Wypełnianie wykresu znakami zależnie od indeksów tablicy a danymi z funkcji
    for(let i = 0; i<  arr2d.length/2; i++){
        for(let y = 0; y< arr2d.length; y++){
            if(Math.round(arr2d[y]*2)/2 == (i-60)/-6) output+='#';
            else output+=' ';
        }
        output+="\n";
    }
    document.querySelector("pre").innerHTML = output;

    // Napisanie wzoru w rogu
    let equation = 'f(x) = ';
    if(a1 != 0) equation += a1 + "x<sup>3</sup> + ";
    if(a2 != 0) equation += a2 + "x<sup>2</sup> + ";
    if(a3 != 0) equation += a3 + "x + ";
    equation += String(a4);
    
    // Wypisanie wyników
    document.querySelector("p.equation").innerHTML = equation;
}
