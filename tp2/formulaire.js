function validation() {
    
    document.getElementById("lastName").value;
    document. getElementById("FirstName").value;
    document.getElementById("courriel").value;
    document.getElementById("dateBirth").value;
    document.getElementById("address").value;
    document.getElementById("nationality").value;
    document.getElementById("Valider").value;
    document.getElementById("error").value;  
     document.getElementById("resultat").value;
   




  /* if(lastName.value.length <5 &&  FirstName.value.length <5 && courriel.value.length <5 && !dateBirth.value && address.value.length <5 && !nationality.value ){
        document.getElementById("error").innerHTML="La saisie des champs est obligatoires et car sup a 5";
        }else{
            document.getElementById("resultat").innerHTML="Bienvenue kat " ;
        }*/
   

    if(lastName.value.length<5  ){
        
        document.getElementById("error").innerHTML="veuillez saisir votre Nom";
     
    }
     
     else if(FirstName.value.length<5   ){
            document.getElementById("error").innerHTML="veuillez saisir votre Prenom";
            }
           
    else if(!courriel.value ){
                document.getElementById("error").innerHTML="veuillez saisir votre Mail";
                }
                  
      else if(!dateBirth.value ){
                    document.getElementById("error").innerHTML="veuillez saisir votre Date de naissance";
                    }
                    
     else if(address.value.length<5 ){
                        document.getElementById("error").innerHTML="veuillez saisir votre Adresse";
                        }
                        
      else if(!nationality.value ){
                          document.getElementById("error").classList.add("display");
                         document.getElementById("error").innerHTML="veuillez saisir votre Nationalité"; 
                           

                             
                       }
                       else{
                        
                             
                           
       document.getElementById("resultat").innerHTML="Bienvenue " + document.querySelector("#FirstName").value;
                       }




   /* var inputAw=document.getElementsByTagName("inputAW");
    for (let i = 0; i < inputAw.lenght; i++){
        if(!inputAw[i].value){
            document.getElementById("error").innerHTML="caractaire sup 5";
            
        }
        else{
            document.guetElementById("resultat").innerHTML="bienvenu kat";
            
        
    }

}  */                                            
                        
}


