const users = [
    { username: 'admin', password: 'password' }
];

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        window.location.href = 'admin.html';
    } else {
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}
window.onload = function() {
    google.accounts.id.initialize({
      client_id:"440778013451-4hg8nqth492vkalgnpakcv3jhmal36qd.apps.googleusercontent.com";
      callback: handleCredentialResponse

    });

    google.accounts.id.prompt();

 }

function decodeJwtResponse(token){
var base64Url = token.split(".")[1];
var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
var jsonPayload = decodeURIComponent(

   atob(base64) 
      .split("") 
      .map(function  (c) {
         return "%" + ("00"  + c.charCodeAt(0).toString(16).slice(-2);
      
      
      })
      .join("")
  
 );    
       return JSON.parse(jsonPayload);

 }

 function handleCredentialResponse(response){
    const responsePayload = decodeJwtResponse(response.cresential);
    console.log("Nombre De Usuario" , responsePayload.name);




 }
