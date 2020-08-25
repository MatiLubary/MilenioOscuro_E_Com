





var edit = {
    name : "",
    description : ""

}

window.addEventListener("load" , function(){

   
   
let formulario = document.querySelector("#formulario")

let errorName = document.querySelector("#errorName")

let precioNuevo = document.getElementById("precioNuevo")

let check = document.getElementById("customSwitch1").onchange = inhabilitar



function inhabilitar(){

    precioNuevo.disabled = !precioNuevo.disabled
}







formulario.name.addEventListener("keyup" ,function(e){

    edit.name = e.target.value

    if(edit.name.length < 5){
     errorName.classList.remove("ocultar")
 } else{
     errorName.classList.add("ocultar")
 }
 
 
})

formulario.description.addEventListener("keyup" ,function(e){

    edit.description = e.target.value

    if(edit.description.length < 20){
     errorDescription.classList.remove("ocultar")
 } else{
     errorDescription.classList.add("ocultar")
 }
 
 
})



formulario.addEventListener("submit", function(e){

   if(errorName.classList.contains("ocultar")){
       console.log("bien")
   }
    
   else {
    e.preventDefault()
}


   if(errorDescription.classList.contains("ocultar")){
    console.log("bien")
}
   
   
   else {
       e.preventDefault()
   }



})











})