class Password {
    constructor(){
        this.longitud = 8;
        this.contrasenya = [];
    }

    generarContraseña(){
        let arrContrasenya = [];
        for (let i = 0; i < this.longitud; i++) {
            arrContrasenya.push(Math.round(Math.random() * 10));            
        }

        return this.contrasenya = arrContrasenya;
    }
}

let contrasenyaGenerada = new Password();

console.log(contrasenyaGenerada.generarContraseña());