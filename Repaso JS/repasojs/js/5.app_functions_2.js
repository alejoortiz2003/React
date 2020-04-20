// Parametros por default en las funciones

function actividad(nombre = 'Walter White', actividad = 'Ensenar Quimica'){
    console.log(`la persona ${nombre}, esta realizando la actividad: ${actividad}`);
}

actividad('David', 'Aprender JavaScript');
actividad('Pedro', 'Creando un sitio web');
actividad();
