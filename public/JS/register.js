

const form = document.getElementById('form')

const nameReq = document.getElementById('nameReq')
const name = document.getElementById('name')

const emailReq = document.getElementById('emailReq')
const email = document.getElementById('email')

const pwReq = document.getElementById("pwReq")
const pw = document.getElementById("pw")

name.addEventListener('textInput', name_Verify)
email.addEventListener('textInput', email_Verify)
pw.addEventListener('textInput', pw_Verify)

function validated(){
    if (name.value === '' || name.value == null){
    name.style.border = "1px solid red";
    nameReq.style.display = 'block'
    name.focus();
    return false
    }
    if (email.value === '' || email.value == null){
        email.style.border = "1px solid red";
        emailReq.style.display = 'block'
        email.focus();
        return false
    }
    if (pw.value === '' || pw.value == null){
        pw.style.border = "1px solid red";
        pwReq.style.display = 'block'
        pw.focus();
        return false
    }
}

function email_Verify() {
    if (email.value != '' || email.value != null){
        email.style.border = "1px solid silver"
        emailReq.style.display = "none"
        return true
    }
}

function pw_Verify() {
    if (pw.value != '' || pw.value != null){
        pw.style.border = "1px solid silver"
        pwReq.style.display = "none"
        return true
    }
}    
function name_Verify() {
    if (name.value != '' || name.value != null){
          name.style.border = "1px solid silver"
          nameReq.style.display = "none"
          return true
      }    

}
