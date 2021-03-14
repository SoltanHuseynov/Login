//this processing login create and only easy one be process.
//login json file with be connect but to browser one error create
// error code: require is not definet
// if this used "import" this get error 
// but one [package.json] file in {"type:module"} write  then
// code to run again this get error.

var login={
	username:"admin",
	password:"admin"
}

var notification_username="username to false!"
var notification_password="password to false!"
var notification="username and password to false!"

const login_=function(){
	var user=document.getElementById("username").value
	var pass=document.getElementById("password").value
	// if to success,entry
	if(user.length<=10&&pass.length<=10){
		if(user==login.username&&pass==login.password){
			document.getElementById("new-pages").href="./pages.html"
		}
		else if(user!==login.username&&pass!==login.password){
			alert(notification)
		}
		else if(user!==login.username){
			alert(notification_username)
		}
		else if(pass!==login.password){
			alert(notification_password)
		}
		
	}
}

const sign_up=function(){
	var new_username=document.getElementById("new-username").value 
	var old_password=document.getElementById("old-password").value
	var new_password=document.getElementById("new-password").value
	var login_open=document.getElementById("login-none")
	var sign_close=document.getElementById("sign_")
	const sign_data={
		new_pass:new_password,
		new_user:new_username,
		old_pass:old_password
	}
	if(sign_data.old_pass!==login.username){
		alert("your old password to false")
	}
    else if(sign_data.new_pass==false&&sign_data.new_user==false){
	    	alert("new username and new passwor not value")
	}
	else if(sign_data.new_user==false){
		alert("new username not value")
	}
	else if(sign_data.new_pass==false){
		alert("new password not value")
	}
	else if(sign_data.old_pass==login.password){
		login_open.style.display="block"
		sign_close.style.display="none"
		delete login.username
		delete login.password
		if(login.username==null&&login.password==null){
			login.username=sign_data.new_user
			login.password=sign_data.new_pass
		}
	}
} 

const sign_open=()=>{
	var sign=document.getElementById("sign_")
	var login_none=document.getElementById("login-none")
	  if(sign){
		sign.style.display="block"
		login_none.style.display="none"
	}
}
