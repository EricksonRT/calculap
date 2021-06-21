/////////////Suma

function Suma() {

    const nro1 = parseInt(document.getElementById("nro1").value);
    const nro2 = parseInt(document.getElementById("nro2").value);
    resultado = nro1 + nro2;
    document.getElementById('resultadp').innerHTML = "El resultado de suma es: <big><span style='color: white;'> " + resultado + " </span></big>";
}

/////////////Resta
function Resta() {

    const nro1 = parseInt(document.getElementById("nro1").value);
    const nro2 = parseInt(document.getElementById("nro2").value);
    resultado = nro1 - nro2;

    document.getElementById('resultadp').innerHTML = "El resultado de resta es:<big><span style='color: white;'> " + resultado + " </span></big>";

}

/////////////Multiplicacion
function Multi() {

    const nro1 = parseInt(document.getElementById("nro1").value);
    const nro2 = parseInt(document.getElementById("nro2").value);
    resultado = nro1 * nro2;

    document.getElementById('resultadp').innerHTML = "El resultado de multiplicación es:<big><span style='color: white;'> " + resultado + " </span></big>";

}

/////////////Division
function Div() {

    const nro1 = parseInt(document.getElementById("nro1").value);
    const nro2 = parseInt(document.getElementById("nro2").value);
    resultado = nro1 / nro2;

    if (nro2 == 0) {
        alert("No se puede dividir entre 0");
    } else {
        document.getElementById('resultadp').innerHTML = "El resultado de la división es: <big><span style='color: white;'> " + resultado + " </span></big>";
    }
}
/////////////Perimetro
function perimetro() {
    let nrop = parseInt(document.getElementById("nrop").value);
    let seleccion = (document.getElementById('tipo').value);
    document.getElementById("r_perimetro").innerHTML = "<br>El perimetro es: " + nrop * seleccion;
}

/////////////Area
function area() {
    let nroArea = (document.getElementById("tipoArea").value);
    if (nroArea == 1) {
        var base = prompt("Ingresa medida de la base");
        var altura = prompt("Ingresa la altura");
        r_area = base * altura;

        document.getElementById("r_area").innerHTML = "<br> El área del cuadrado es: " + r_area;
    } else if (nroArea == 2) {
        var base = prompt("Ingresa meddia de la base");
        var altura = prompt("Ingresa la altura");
        r_area = (base * altura) / 2;

        document.getElementById("r_area").innerHTML = "<br> El área del triángulo es: " + r_area;
    } else if (nroArea == 3) {
        var base = prompt("Ingresa medida de la base");
        var altura = prompt("Ingresa la altura");
        r_area = base * altura;

        document.getElementById("r_area").innerHTML = "<br> El área del rectángulo es: " + r_area;
    } else {
        var radio = prompt("Ingresa el radio del círculo");
        let pi = 3.14;
        r_radio = pi * Math.pow(radio, 2);
        document.getElementById("r_area").innerHTML = "<br> El radio del círculo es: <span>" + r_radio + "</span>"
    }

}

/////////////////validar solo un check

function uncheck() {
    var checkbox1 = document.getElementById("m");
    var checkbox2 = document.getElementById("f");
    checkbox1.onclick = function() {
        if (checkbox1.checked != false) {
            checkbox2.checked = null;
        }
    }
    checkbox2.onclick = function() {
        if (checkbox2.checked != false) {
            checkbox1.checked = null;
        }
    }
}


/////////////////Info
function info() {
    let nombre = document.getElementById("nombre").value;
    var sexo = "";
    ///determinanos cual de los dos checkbox apretó para definir el sexo
    if (document.getElementById('m').checked) {
        sexo = "masculino";
    }
    if (document.getElementById('f').checked) {
        sexo = "femenino";
    }
    let edad = parseInt(document.getElementById("edad").value);
    let vida = document.getElementById("actitud").value;

    let nacimiento = document.getElementById("nacimiento").value;



    alert("Hola, " + nombre + " sos una persona de sexo " + sexo + ". Tenès " + edad + " años, y parece que te gusta " + vida + " aparentemente, no obstante parece ser que tu fecha de nacimiento fué en " + nacimiento);


}