//LAB 4 - JS ENCRYPTION
window.onload = function (){

  var formHandle = document.forms[0];

  formHandle.onsubmit = processForm;

  function processForm(){

  var msgOut = document.getElementById("getMD5__output");
  var userPass = formHandle.md5form_txt.value;
  var userPassMD5 = CryptoJS.MD5(userPass);

  if(userPass===""){
    msgOut.innerHTML = "Invalid Password";
  } else {
  msgOut.innerHTML = "Your encrypted password is:" + userPassMD5;
}
  return false;

}



}
