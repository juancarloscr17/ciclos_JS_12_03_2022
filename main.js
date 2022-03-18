
let data = new Array(5).fill(null);
Object.preventExtensions(data);
data.fill("Miguel", 4);


let datos = data.map(function(v,i){
    if(v == null){
        return i+2;
    }else{
        return v;
    }
})

console.log(data);
console.log(datos);
