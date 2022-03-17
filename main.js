
let data = new Array(5).fill(null);
Object.preventExtensions(data);
data.fill("Juan",4)


data.forEach(function(v,i,clone){
    console.log(i);
});


addEventListener("submit", function(e){
    Array.from(e.target).forEach(element=>{
        if(element.nodeName != "BUTTON"){
            console.log(element.value);
        }else{
            console.log(element.dataset.envio);
        }
    })
    e.preventDefault()
    
});
