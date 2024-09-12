export interface Producto{
    desc:string;
    precio:number;
}
const telofono:Producto={
    desc:'Sony Erickson',
    precio:500
}
const table:Producto={
    desc:'Samsung',
    precio: 7642
}
function calcularIVA(Producto:Producto[]):number{
    let total=0;
    Producto.forEach((Producto)=>{
        total +=Producto.precio
    })
    return total * 0.16;
}
const articulo1=[telofono, table]
const iva1=calcularIVA(articulo1)
console.log(`IVA: ${iva1}`)

    