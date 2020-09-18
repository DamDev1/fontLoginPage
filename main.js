function validate(){
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var massage = document.getElementById("massage").value;

    if (name == null || name == ""){
        alert("Please Enter Your Name");
        return false;
    }else if(company == ""){
        alert("Please Enter Your Company name");
        return false;
    }else if(email == ""){
        alert("Please Enter Your Email");
        return false;
    }else if(phone == ""){
        alert("Please Phone Number Can't Be Empty");
        return false;
    }else if(phone.length < 13){
        alert("Please Your Phone Must Be Less Than 12");
        return false;
    }else if(massage == ""){
        alert("Please Massage Can't Be Empty");
        return false;
    }
}

