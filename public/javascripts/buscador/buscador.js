let allTitle = []

window.addEventListener("load", function(){
    
    let buscador = document.querySelector("#searchBuscador")

    let lista = document.querySelector("#lista")

  sugBusqueda = document.querySelector("#sugBusqueda")



 let busquedasRealizadas = document.querySelector("#busquedasRealizadas")




 buscador.addEventListener("focus" , function(){
    sugBusqueda.classList.remove("ocultar")
    
})

    buscador.addEventListener("blur", function(){
          sugBusqueda.classList.add("ocultar")
        
      
    })
 





    fetch("http://localhost:3000/products/developers")
.then(function(result){
return result.json()
})
.then(function(info){
    info.forEach(function(titulos){
        allTitle.push(titulos)
    })

    buscador.addEventListener("keyup",function(){

        busquedasRealizadas.innerHTML = ""

      
        
        for(let titulo of allTitle){

          
            
                if (titulo.name.toLowerCase().indexOf(buscador.value.toLowerCase()) == 0){

             
                    busquedasRealizadas.innerHTML += `<tr><th class="items">${titulo.name}</th></tr>`
                 
                }

            
            
         }

         

         if( busquedasRealizadas.innerHTML == ""){
             busquedasRealizadas.innerHTML += `<tr><th class="items">No se encontro el producto...</th></tr>`
         }

       if(buscador.value == ""){
        sugBusqueda.classList.add("ocultar")
       }else{
        sugBusqueda.classList.remove("ocultar")
       }

         opciones = document.querySelectorAll("th")
         for(let item of opciones){
             item.addEventListener("mouseover", function(){
                 item.classList.add("sombreado")
                 
             })

             item.addEventListener("mouseout", function(){
                item.classList.remove("sombreado")

            })

            item.addEventListener("mouseover", function(){
                document.getElementById("searchBuscador").value =item.innerHTML
            
            
            })

             item.addEventListener("click", function(){
                sugBusqueda.classList.toggle("ocultar")
                
              
            })
           

                

         }




    })

    

    
    
    
    
}) 






})