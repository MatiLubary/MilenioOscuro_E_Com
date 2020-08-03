window.addEventListener("load" , function(){


    boton = document.querySelector(".aniadir")

    miCuenta = document.querySelector("#miCuenta").innerText 

    if(miCuenta == "Mi cuenta"){
        boton.addEventListener("click", function(){
         alert("debe loguearse")
        })
    } 
    
  

})