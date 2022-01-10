class Persona {
    constructor (nombre, edad, DNI, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso + 'kg';
        this.altura = altura + 'cm'; 
    }
}

let Axel = new Persona('Axel', 23, '53839556Y', 'H', 120, 170);
let Rafa = new Persona('Rafa', 23, '53839556Y', 'H', 70, 170);
let Manel = new Persona('Manel', 32, '53839556Y', 'H', 80, 174);
let Christian = new Persona('Christian', 31, '53839556Y', 'H', 75, 180);

let arrPersonas = [Axel, Rafa, Manel, Christian];

console.log(arrPersonas)