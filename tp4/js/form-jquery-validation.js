$( document ).ready(function() {
  // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
  // voir plus : https://www.w3schools.com/js/js_htmldom.asp
   console.log( "DOM ready!" );

   $("#gps").on("click",function getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      $("#map").html("Geolocation is not supported by this browser.");
  } 
   
});





  $( "#nom" ).keyup(function(  ){
  
    
    /*var nombreCaractere = $("#nom").val().length;
    var msg = ' ' + nombreCaractere  ;*/
    $('#caraNom').html( `${$("#nom").val().length} car`);
  
     
    
      });
      $( "#prenom" ).keyup(function(  ){
    
      
        
        $('#caraPrenom').html( `${$("#prenom").val().length} car`);
      
            
        
          });
        
              $( "#mail" ).keyup(function(  ){
    
      
                
                $('#caraMail').html( `${$("#mail").val().length} car`);
              
                    
                
                  });
                  $( "#adresse" ).keyup(function(  ){
      
                    $('#caraAdd').html( `${$("#adresse").val().length} car`);
                  
                       
                    
                      });
  
                     
    





$("#valider").on("click",function(event){
  event.preventDefault();
  console.log( "click" );


 if($("#nom").val().length<5 || $("#nom").val().length>20 ){
    $(".modal-body").text('veuillez saisir votre nom'); 
    $('#myModal').modal("show"); 
}
else if($("#prenom").val().length<5 || $("#prenom").val().length>20 ){
    $(".modal-body").html('veuillez saisir votre prenom'); 
    $('#myModal').modal("show"); 
}
else if($( "#datBirth" ).val()=="" ){
    $(".modal-body").text('veuillez saisir votre date de naissance'); 
    $('#myModal').modal("show"); 
}
else if($("#mail").val().length<10 || $("#mail").val().length>25 ){
    $(".modal-body").text('veuillez saisir votre mail'); 
    $('#myModal').modal("show"); 
}
else if($("#adresse").val().length<10 || $("#adresse").val().length>40 ){
    $(".modal-body").text('veuillez saisir votre adresse'); 
    $('#myModal').modal("show"); 
}


else{
  contactStore.add (
    $("#nom").val(),
    $("#prenom").val(),
    $("#datBirth").val(),
    $("#mail").val(),
    $("#adresse").val()
  );
  
  var contactList = contactStore.getList();
  $("table tbody").html("");
  
  for( var contacts of contactList ){
    
    $("#tabl tbody").append ( 
  
    ` <tr> 
      
     <td> ${contacts.nom}</td>
     <td> ${contacts.prenom}</td>
    <td> ${contacts.datBirth}</td>
     <td> <a href="mailto:${contacts.mail}">${contacts.mail}</a></td>
     <td> <a href="https://maps.google.com/?q=${contacts.adresse}">${contacts.adresse}</a></td>
  
      
        
      
      
     </tr>`
  
         
     );
  
  }
}





  



});









});







                  









