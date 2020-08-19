
const form = document.getElementById('form')

const emailReq = document.getElementById('emailReq')
const email = document.getElementById('email')

const pwReq = document.getElementById("pwReq")
const pw = document.getElementById("pw")

email.addEventListener('textInput', email_Verify)
pw.addEventListener('textInput', pw_Verify)

function validated(){
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
