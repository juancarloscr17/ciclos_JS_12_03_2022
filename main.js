
function saldar() {
    return "Hola Como estas";
}
let data = {
    nombre: "Juan",
    apellido : "Coronel",
    edad: 36,
    saldar
}

let datos = Object.entries(data).map(function(elemt){
    let obj = {};
    if(typeof(elemt[1]) == "function"){
        obj.saludar = data.saldar();
    }else{
        if(elemt[0] == "nombre"){
            obj[elemt[0]] = `${elemt[1].toUpperCase()} Carlos`;
        }else{
            obj[elemt[0]] = elemt[1];
        }
    }
    return obj;
})

console.log(data);
console.log(Object.assign({}, ...datos) );

