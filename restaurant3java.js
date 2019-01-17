// JavaScript for Restaurant3

function validateForm() {
  var name = document.forms["sendRequest"]["name"].value;
  var phone= document.forms["sendRequest"]["phone"].value;
  var email= document.forms["sendRequest"]["email"].value;
  var reason= document.forms["sendRequest"]["reason"].value;
  var info= document.forms["sendRequest"]["info"].value;
  var visit = document.forms["sendRequest"]["questionnaire"].value;
  var days = document.forms["sendRequest"]["days"].value;
  if (name != ""){
  alert("Thank you, " + name +" we'll be in touch!");
}
  return false;
}
