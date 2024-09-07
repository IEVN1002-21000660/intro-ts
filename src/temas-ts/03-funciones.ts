//funciones
 
function suma(){
    var num1:number = 6;
    var num2:number = 6;
 
    let suma = num1 + num2;
 
    document.write("Resultado: " + suma)
}
 
function restar(a:number, b:number):number{
    return a-b;
}
 
const res = restar(10,2)
   
console.log(res);
 
 
interface Mascotas{
    nombre : string;
    edad : number;
    mostrarEdad:()=>void;
}
 
function calcular(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}
 
const nuevaMascota:Mascotas = {
    nombre: "miau",
    edad: 10,
    mostrarEdad(){
        console.log(`La edad de ${nuevaMascota.nombre} es ${this.edad}`)
    }
}
 
calcular(nuevaMascota, 4)