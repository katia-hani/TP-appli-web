$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );

     $("#valider").on("click",function(event){
        event.preventDefault();
        console.log( "click" );

        if($('input[type=radio]:checked').length==0){
            $(".modal-body").text('veuillez saisir votre sexe'); 
            $('#myModal').modal("show"); 
        }

       
        else if($("#nom").val().length<5 || $("#nom").val().length>20 ){
            $(".modal-body").text('veuillez saisir votre nom'); 
            $('#myModal').modal("show"); 
        }
        else if($("#prenom").val().length<5 || $("#prenom").val().length>20 ){
            $(".modal-body").html('veuillez saisir votre preno,'); 
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
       
        else if($("#nationalité").val()==""){
            $(".modal-body").text('veuillez saisir votre nationalité'); 
            $('#myModal').modal("show"); 
        }
      else{
         $(".modal-title").html(`Bienvenue ${$("#prenom").val()}` );
         $(".modal-body").html(`vous êtess nés le ${$("#datBirth").val()} et vous habitez à <img src="staticmap.png"/> <a href=" https://www.google.fr/maps/place/Arc+de+Triomphe/@48.8737952,2.2928388,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fec70fb1d8f:0xd9b5676e112e643d!8m2!3d48.8737917!4d2.2950275?hl=fr">Arc de Trionphe</a>`);
        $('#myModal').modal("show");
      }
    
    
         
      
    
      });
     
 });