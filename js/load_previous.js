$(document).ready(function () {
    $.ajax({
        url: './php/load_data.php',
        method: "POST",
        success: function (data) {
            console.log(data);
            $(".results>tbody").html(data);
        },
        error: function (error) {
            console.log(error);
        },
    });
});