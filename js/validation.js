$(function () {
    $("#submit").click(function (event) {

        event.preventDefault()

        // name field validation
        $("#name").removeClass("is-valid is-invalid");
        var nameRole = $("#name").attr("data-validation-role").split(",");
        $.each(nameRole , function (roleIndex,roleElement) {
            nameRole = roleElement;
            validName = eval(nameRole+"($('#name'))");
        });

        if (validName == false){
            $('#name').addClass("is-invalid");
        }
        if (validName == true){
            $('#name').addClass("is-valid");
        }


        // email field validation
        $("#email").removeClass("is-valid is-invalid");
        var emailRole = $("#email").attr("data-validation-role").split(",");
        $.each(emailRole , function (roleIndex,roleElement) {
            emailRole = roleElement;
            validEmail = eval(emailRole+"($('#email'))");
        });

        if (validEmail == false){
            $('#email').addClass("is-invalid");
        }
        if (validEmail == true){
            $('#email').addClass("is-valid");
        }


        // message field validation
        $("#message").removeClass("is-valid is-invalid");
        var messageRole = $("#message").attr("data-validation-role").split(",");
        $.each(messageRole , function (roleIndex,roleElement) {
            messageRole = roleElement;
            validMessage = eval(messageRole+"($('#message'))");
        });

        if (validMessage == false){
            $('#message').addClass("is-invalid");
        }
        if (validMessage == true){
            $('#message').addClass("is-valid");
        }

    });

    function checkEmpty(Item) {
        var inpValue = $(Item).val();

        if (inpValue.length == 0){
            return false
        }
        return true
    }

    function checkMail(Item) {
        var EmailAddr = $(Item).val()
        var AtPos = EmailAddr.indexOf("@")
        var lastAtPos = EmailAddr.lastIndexOf("@")

        if( AtPos > 1 && AtPos == lastAtPos){
            var DotPos = EmailAddr.indexOf(".")
            var lastDotPos = EmailAddr.lastIndexOf(".")
            if(DotPos > 0 && (lastDotPos - AtPos) > 3){
                if(EmailAddr.length - lastDotPos > 2){
                    return true
                }
                else{
                    return false ;
                }
            }
            else{
                return false ;
            }
        }
        else{
            return false ;
        }

    }
})


