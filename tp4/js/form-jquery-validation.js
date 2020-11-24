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

$( document ).ready(function() {



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
  
                     
    

});



$("form").on("submit",function(event){
  event.preventDefault();
  
  contactStore.add (
    $("#nom").val(),
    $("#prenom").val(),
    $("#datBirth").val(),
    $("#mail").val(),
    $("#adresse").val()
  );

 var contactList = contactStore.getList();
 $("table tbody").html("");

  for( var contact of contactList ){
    
    $("#tabl tbody").html ( 

    ` <tr> 
      
     <td> ${contact.nom}</td>
     <td> ${contact.prenom}</td>
    <td> ${contact.datBirth}</td>
     <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
     <td> <a href="https://maps.google.com/?q=${contact.adresse}">${contact.adresse}</a></td>

      
        
      
      
     </tr>`

         
     );

  }


});









});







                  









