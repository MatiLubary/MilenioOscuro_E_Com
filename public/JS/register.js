alert('hola')
window.addEventListener('load', function() {
    //let formulario = document.getElementById("form")

     

    let campoName = document.getElementById("name");
    let campoEmail = document.getElementById("email");
    let campoPassword = document.getElementById("password");

    let errorName = document.getElementsByClassName('errorName')[0];
    let errorEmail = document.getElementsByClassName('errorEmail')[0];
    let errorPassword = document.getElementsByClassName('errorPassword')[0];
    let errores = 0;
    formulario.addEventListener("submit", function(e){
      //e.preventDefault();
   
        if (campoName.value  == ""){
            errorName.style.visibility = 'visible';
            errores = errores + 1;
          } 
        if ( campoEmail.value  == ""){
            errorEmail.style.visibility = 'visible';
            errores = errores + 1;
          }   
        if (campoPassword.value  == "" || campoName.value.length < 9) {
            errorPassword.style.visibility = 'visible';
            errores = errores + 1;
          }  
        if (errores > 0){
          e.preventDefault();
        }  

    })




//  check('name').isLength({min:3, max:15}).withMessage('El Nombre debe contener por lo menos 3 letras y maximo 15'),
//   check('email').isEmail().withMessage('El Email debe ser una direccion valida'),
//   check('password').isLength({min:8}).withMessage('La contraseña debe contener por lo menos 8 caracteres') ], userControllers.create);




   // document.querySelector('body').style.backgroundColor = 'lightskyblue';
    
  //  document.querySelector('h2').style.textAlign = 'center';
    
    //document.querySelector('h4').style.fontStyle = 'italic';
    
    });