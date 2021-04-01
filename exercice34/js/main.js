




$("button").click(function(){

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/usa',
        success: function(data, statuts, response) {

             $("input").val()
             console.log($("input").val());
         
            // $("input").val();
            // $("input").val("usa");
            
            $('#country').html(data[0].name)
            $('#capital').html(data[0].capital)

            
            
            
            
            
           
            
            
        }
    });
    

   });
