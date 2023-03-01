function calc(){
    let x = document.getElementById("input").value;
    let y = (0.55)*(x-32);
    let z = (x-32)*(5/9) + 273.15;
    document.getElementById("cout").innerHTML = y.toFixed(3);
    document.getElementById("kout").innerHTML = z.toFixed(3);

}