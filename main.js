for (let i= 0; i < 5; i++) {
   console.log(`Ciclo normal ${i}`);
}

let x =0;
for(x;true;){
    if(x<5){
        console.log(`Ciclo personalizado ${x}`);
    }
    else{
        break;
    }
    x++
}