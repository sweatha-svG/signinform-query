$(document).ready(function(){
    $('#sign').validate({
       rules:{
           fname:{
               required:true,
               minlength:5,
           },
           sname:{
            required:true,
            minlength:5,
        },
        number:{
            required:true,
            minlength:10,
        },
        password:{
            required:true,
            minlength:8,
        },
        day:{
            required:true,
            },
            month:{
                required:true,
               },
               year:{
                required:true,
                
            },
            gender:{
                required:true,
                
            },
    }
     
   
    })
   });