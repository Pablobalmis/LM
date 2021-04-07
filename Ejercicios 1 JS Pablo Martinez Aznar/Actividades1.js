'use strict'
// Ejercicio 1
function ejercicio1(cadena, booleano, array, funcion)
{
    //en vez de typeof array != "object" prueba isArray()
    if(typeof cadena != "string" || typeof booleano != "boolean" || typeof array != "object" || typeof funcion != "function")
    {
        console.log("El tipo de dato no es correcto");
        return;
    }

    let mult = 1;
    if(booleano == true)
    {
        array.forEach(num => mult*=num);
        if(mult >= 100)
        {
            if(cadena.includes('a'))
            {
                console.log("La letra a No esta permitida");
            }
            else
            {
                console.log("Muy bien no has usado la letra a");
            }
        }
        else
        {
            console.log("El producto de tu array es insuficiente para comprobar la cadena");
        }
    }
    else
    {
        funcion();
    }
}

ejercicio1("Test1", true, [1,2,3,4,5], ()=>{alert("Se acabo el juego")});

// Ejercicio 2

function VerAsignaturas(...alumnos)
{
    if(alumnos.length == 0)
    {
        console.log("No hay datos para mostrar");
        return;
    }
    for(let i = 0; i < alumnos.length; i++)
    {
        let alumno = alumnos[i];
        //El ejercicio te "obliga" a desestructurar el array entonces puedes hacer lo siguiente
        //       let [nombre,curso,...asignaturas] = i
        //        console.log(nombre + "-" + curso + " asignaturas: " + asignaturas.join("/"));


        console.log(alumno[0] + "-" + alumno[1] + " asignaturas: " + alumno.join("/"));
    }
}
VerAsignaturas(["Pablo", "1DAMAB", "LM", "programacion", "ED"], 
    ["Jacinto", "1Quimica", "Perfumeria", "tabla periodica la asignatura", "mezlar cosas raras", "llorar por no ser fisico"]);

// Ejercicio 3

let arrayEj3 = [];
let num;
let vueltas = 0;

while(true)
{
    if(vueltas%2 == 0)
    {
        num = +prompt("Introduce un numero, para parar pon algo que no sea un numero");
    }
    else
    {
        num = Number(prompt("Introduce un numero, para parar pon algo que no sea un numero"));
    }
    
    if(isNaN(num))
    {
        break;
    }
    arrayEj3.push(num);
    vueltas++;
}
let arrayOrdenada = arrayEj3.sort((n1,n2) => n1-n2);
console.log("Array orginal solo con los multiplos de 3: " + arrayEj3.filter(num=>num%3 == 0));
console.log("Array ordenada: " + arrayOrdenada);
