$(document).ready(() =>{

    $("#btn-xchange").click( () => {
        let base = $("#curr").val();
        let target = $("#curr2").val();
        let value = parseFloat($("#value").val());
        $.ajax({
            url:"https://v6.exchangerate-api.com/v6/YourAPIKey/pair/"+base+"/"+target+"/"+value,
            type: "GET",
            success: (response) =>{
                console.log(response);
                $(".result").text("The exchanged result is " + response.conversion_result + " " + response.target_code)
            }
        })
       })

})
