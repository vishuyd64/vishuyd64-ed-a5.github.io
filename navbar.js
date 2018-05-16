//when click on Dropdown button

$(document).ready(() => {

	$(".dropdown-menu").hide("#drop");

    $("#navid").click(() => {
        if($(".dropdown-menu").hide("#drop"))
        {
            $("#drop").show();
        }
        else 
        {
            $(".dropdown-menu").hide("#drop");
        }
        
    })
})
    
