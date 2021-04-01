





// $("input").addClass("is-valid");


// if ($("input").keyup().length >= 5) {

//     $("input").addClass("is-valid");
//     console.log("is-valid");

// } 





$("input").keyup(function () {


    if ($("input").val().length >= 5) {

        $("input").removeClass("is-invalid");
        $("input").addClass("is-valid");
        

    }  else  {
        $("input").addClass("is-invalid");


    } 

});





































































