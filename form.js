function valid(){
	var name=document.getElementById("u-name").value;
	var name_reg=/^[A-Z a-z]+$/;
	var phone=document.getElementById("p-number").value;
	var phone_regular=/^[0-9]{10}$/;
	var phone_regular1=/^[0-9]{11}$/;
	var phn_reg=/^[A-Z a-z]+$/;
	var email=document.getElementById("m-email").value;
	var email_regular=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	//name validation start
	if(name==""){
		document.querySelector(".name-error").innerHTML="Please Enter Your Name";
		document.querySelector(".name-error").style.cssText="color:red";
		return false;
	}
	else{
		document.querySelector(".name-error").innerHTML="";
	}
	
	if(!name_reg.test(name)){
		document.querySelector(".name-error").innerHTML="Enter Only Aplhabets";
		document.querySelector(".name-error").style.cssText="color:red";
		return false;
	}
	else{
		document.querySelector(".name-error").innerHTML=" ";
	}
	//name validation end
	
	//phone validation start
	if(phone==""){
		document.querySelector(".phone-error").innerHTML="Please Enter Your Phone Number";
		document.querySelector(".phone-error").style.cssText="color:red";
		return false;
	}
	else{
		document.querySelector(".phone-error").innerHTML="";
	}
	
	if(phone_regular.test(phone) || phone_regular1.test(phone)){
		document.querySelector(".phone-error").innerHTML="";
		document.querySelector(".phone-error").style.color="";
	}
	else if(phone>10){
		document.querySelector(".phone-error").innerHTML="Enter 10 Digit Phone Number";
		document.querySelector(".phone-error").style.color="red";
		return false;
	}
	
	else if(phn_reg.test(phone)){
		document.querySelector(".phone-error").innerHTML="Please Enter Only Digits";
		document.querySelector(".phone-error").style.color="red";
		return false;
	}
	
	else{
		document.querySelector(".phone-error").innerHTML="Enter Your Phone Number";
		document.querySelector(".phone-error").style.color="red";
		return false;
	}
	//phone validation end
	
	//Email validation Start
	
	if(email==""){
		document.querySelector(".email-error").innerHTML="";
	}
	else if(!email_regular.test(email)){
		document.querySelector(".email-error").innerHTML="Please Enter Your Email Properly";
		document.querySelector(".email-error").style.cssText="color:red";
		return false;
	}
	else{
		document.querySelector(".email-error").innerHTML="";
	}
	
	//Email validation end
}

function nBlur(){//name validation
	var name=document.getElementById("u-name").value;
	var name_reg=/^[A-Z a-z]+$/;
	if(!name_reg.test(name)){
		document.querySelector(".name-error").innerHTML="Enter Only Aplhabets";
		document.querySelector(".name-error").style.cssText="color:red";
		return false;
	}
	else{
		document.querySelector(".name-error").innerHTML=" ";
	}

}

function pBlur(){//phone validation
	var phone=document.getElementById("p-number").value;
	var phone_regular=/^[0-9]{10}$/;
	var phone_regular1=/^[0-9]{11}$/;
	var phn_reg=/^[A-Z a-z]+$/;
	
	
	if(phone_regular.test(phone) || phone_regular1.test(phone)){
		document.querySelector(".phone-error").innerHTML="";
		document.querySelector(".phone-error").style.color="";
	}
	else if(phone>10){
		document.querySelector(".phone-error").innerHTML="Enter 10 Digit Phone Number";
		document.querySelector(".phone-error").style.color="red";
		return false;
	}
	
	else if(phn_reg.test(phone)){
		document.querySelector(".phone-error").innerHTML="Please Enter Only Digits";
		document.querySelector(".phone-error").style.color="red";
		return false;
	}
	
	else{
		document.querySelector(".phone-error").innerHTML="Enter Your Phone Number";
		document.querySelector(".phone-error").style.color="red";
		return false;
	}	
}

function eBlur(){//email validation
	var email=document.getElementById("m-email").value;
	var email_regular=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(!email_regular.test(email)){
		document.querySelector(".email-error").innerHTML="Please Enter Your Email Properly";
		document.querySelector(".email-error").style.cssText="color:red";
	}
	else if(email==""){
		document.querySelector(".email-error").innerHTML="";
	}
	else{
		document.querySelector(".email-error").innerHTML="";
	}
}
