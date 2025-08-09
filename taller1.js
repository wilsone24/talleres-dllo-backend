
// Punto #1. ConvertidorTemp


const convertidorTemp = function (temperatura_grados) {
    f = (temperatura_grados * (9/5)) + 32
    return f
}


// Punto #2. resolvedor

const resolvedor = function (a, b, c, signo) {
    let numerador_izquierda = ((-1) * b)
    let numerador_derecha = ((b**2)-(4*a*c))**(1/2)
    let denominador = 2*a
    if (signo === "+") {
        return ((numerador_izquierda + numerador_derecha)/denominador)
    }
    else if (signo === "-") {
        return ((numerador_izquierda - numerador_derecha)/denominador)
    }
}


// Punto #3. resolvedor

const mejorParidad = function (numero) {
    if ( (numero % 2) === 0 ) {
        return true
    }        
    else {
        return false
    }
}


// Punto #4. peorParidad


const peorParidad = function (numero) {
    
    if (numero === 0) {
        return true
    }

    if (numero === 1) {
        return false
    }

    if (numero === 2) {
        return true
    }

    if (numero === 3) {
        return false
    }

    if (numero === 4) {
        return true
    }

    if (numero === 5) {
        return false
    }

    if (numero === 6) {
        return true
    }

    if (numero === 7) {
        return false
    }

    if (numero === 8) {
        return true
    }

    if (numero === 9) {
        return false
    }

    if (numero === 10) {
        return true
    }
}
