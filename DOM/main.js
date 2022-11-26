let btn=document.getElementById("btn");


function addFav(){

    
    let ul = document.querySelector("#ulist"),
        li = document.createElement("li"),
        inpt = document.createElement("input"),
        label= document.createElement("label"),
        txtVal= document.querySelector("#txtVal").value;
  

    inpt.setAttribute("type","checkbox");
    inpt.setAttribute("value",txtVal);
    inpt.setAttribute("class","checkbox");
    inpt.setAttribute("for",txtVal);
    ul.appendChild(li);
    li.appendChild(inpt);
    li.appendChild(label);
    label.setAttribute("for",txtVal)
    label.innerHTML=txtVal;
    
    document.getElementById("txtVal").value=""
    let valList = document.getElementById("txtVal");
    let listArray=[];
    let checkboxes=document.querySelectorAll(".checkbox");

    for(let checkbox of checkboxes){
    checkbox.addEventListener('click',function(){
        if(this.checked==true){
            listArray.push(this.value)
            valList.value=listArray.join(', ');
        }else{
            listArray= listArray.filter((e)=> e !== this.value);
        }
    })
    }

}


btn.addEventListener("click",()=>{
    addFav();
})