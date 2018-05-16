$(document).ready(() => {

	$(".modal").hide("#modal-id");
    
	$(".btn").click(() => {

        $("#modal-id").slideDown();
    })

     $(".btm").click(() => {

    	$("#modal-id").hide();
    })
      $(".modal-close").click(() => {

    	$("#modal-id").hide();
    })

})
