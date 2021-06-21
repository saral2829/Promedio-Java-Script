var numAlumnos = prompt('Ingrese numero de estudiantes')
numAlumnos=parseInt(numAlumnos)


 for (let i = 0; i < numAlumnos; ++i) {

    var nombre=prompt('Ingrese nombre:')
    var not1=parseInt( prompt('Ingrese nota 1:'));
    var not2=parseInt(prompt('Ingrese nota 2:'));
    var not3=parseInt(prompt('Ingrese nota 3:'));
    
    var prom = parseFloat((not1+not2+not3)/3); 
    alert(' Alumno N° '+i +' : ' + nombre+' Su promedio es:  '+ prom)
    document.write('<h3><ul>ALUMNO N°'+i +' :</ul></h3>'+ nombre)
    document.write('<h4>Notas: </h4>'+ not1+'<br></br>'+not2+'<br></br>'+not3)
    document.write('<h5>Promedio: </h5>'+ prom)
  
}


    


// console.log('Alumno '+prom)