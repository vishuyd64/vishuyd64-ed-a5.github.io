//when click on collapse button

$(document).ready(() => {

	$(".collapse").hide("#collapse1");
	$(".collapse").hide("#collapse2");
	$(".collapse").hide("#collapse3");


	$("#btn1").click(() => {
        if($(".collapse").hide("#collapse1"))
        {
            $("#collapse1").show();
        }
        else 
        {
            $(".collapse").hide("#collapse1");
        }
        
    })

    $("#btn2").click(() => {
        if($(".collapse").hide("#collapse2"))
        {
            $("#collapse2").show();
        }
        else 
        {
            $(".collapse").hide("#collapse2");
        }
        
    })

    $("#btn3").click(() => {
        if($(".collapse").hide("#collapse3"))
        {
            $("#collapse3").show();
        }
        else 
        {
            $(".collapse").hide("#collapse3");
        }
        
    })
   
   
})



/* when hover on collapse button...please check this also

    $(document).ready(() => {

    $(".collapse").hide("#collapse1");
    $(".collapse").hide("#collapse2");
    $(".collapse").hide("#collapse3");

     $("#btn1").hover(() => {
        if($(".collapse").hide("#collapse1"))
        {
             $("#collapse1").show();
        }
        else 
        {
            $(".collapse").hide("#collapse3");
        }
    })
    $("#btn2").hover(() => {
        if($(".collapse").hide("#collapse2"))
        {
             $("#collapse2").show();
        }
        else 
        {
            $(".collapse").hide("#collapse2");
        }
    })
    $("#btn3").hover(() => {
        if($(".collapse").hide("#collapse3"))
        {
             $("#collapse3").show();
        }
        else 
        {
            $(".collapse").hide("#collapse3");
        }
    })


})

    */