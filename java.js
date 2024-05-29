const convertirAGradosCentigrados = gradosFahrenheit =>(5/9)*(gradosFahrenheit-32)
const mostrarTemperatura =(callbackFn, grados)=>{
    //usa la funcion que le llego como parametro
    let gradosCentigrados = callbackFn(grados)
    console.log(gradosCentigrados)
}
mostrarTemperatura(convertirAGradosCentigrados,70)

const Perro={
    nombre:"Pulgas",
    edad:3,
    color:"Negro",
    nombrarPerro(nombre){
        return this.nombre=nombre;
    },
    caracteristicas:{
        raza:"Bulldog Frances",
        altura:20,
        peso:30,
        vacunas:true,
        alimento:"Nutrecan"
    }
}

const Auto={};
Auto.modelo= 1986;
Auto.Color ="Verde";
Auto.caracteristicas={
    marca:"BMW",
    cilindraje: 2500
}

console.log(Perro);
console.log(Auto);

let colorr="rojo"
let modelo=1985
let caracteristicas={
    marca:"BMW",
    cilindraje: 2500
}
const Carro={colorr,modelo,caracteristicas}

const Animal = new Object();
Animal.nombre="Serpiente";

//Acceder a las propiedades
//primera forma
console.log(Perro.nombre);
console.log(Perro.caracteristicas.alimento);
//segunda forma
console.log(Perro['nombre']);

const Arreglo=[Perro,Animal]
Arreglo.forEach((objeto) => {
    //cambiar la propiedad nombre
    objeto.nombre="Lola";
    //Nueva propiedad 
    objeto.creadoEn=2024;
});
console.log(Perro);
console.log(Animal);

//Destructuring(obtener las propiedades)

const {color}= Perro;
console.log(color);