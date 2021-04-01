




$("button").click(function(){

    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function(data, statuts, response) {
            
            // facon 1
            $('#country').html(data[0].name)
            $('#capital').html(data[0].capital)
            
            
            //facon 2
            // $('#country').html('france');
            // $('#capital').html('paris');
            
            
            
        }
    });
    

   });
