$(document).ready(() =>{

    $("#btn-xchange").click( () => {
        let base = $("#curr").val();
        let target = $("#curr2").val();
        let value = parseFloat($("#value").val());
        $.ajax({
            url:"https://v6.exchangerate-api.com/v6/8bbfd5a1ec4e713a8448437c/pair/"+base+"/"+target+"/"+value,
            type: "GET",
            success: (response) =>{
                console.log(response);
                $(".result").text("The exchanged result is " + response.conversion_result + " " + response.target_code)
            }
        })
       })

})