function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if (  name== "gabriela" &&  == "123" ) {
       //alert("usuario y contrasena validos")
       window.open('conttent.html');
     }   else {
       alert("intenta de nuevo");
     }

 };