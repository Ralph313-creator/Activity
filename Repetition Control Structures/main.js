let num = window.prompt("Enter Number");

for(let i=0;i<num;i++){
    if(num<50){
        console.log(`Current at number ${num}. Terminating th loop`);
        break;
    }
    console.log(i)
}

for(let i=0;i<num;i++){
    if(i%10===0){
        console.log(`the number is divisible by 10. skipping the number`);
        continue;
    }else if(i%5===0){
        console.log(i);
    }
    
}