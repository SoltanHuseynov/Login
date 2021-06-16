var express=require("express")
var path=require("path")
var md5=require("md5")
var getJson=require(path.join(__dirname+"/Data/dat.json"))


//start
var app=express()
//var x=getJson.admin="set"
//console.log(x)
console.log(getJson)

//static file
app.use(express.static("public"))

//add the html file
app.get("/index.html",(req,res)=>{
	
	res.sendFile(path.join(__dirname+"/index.html"))
})
//get to the html value
class Login{
	constructor(){
	}
	login(req,res){
		//processing 1
		var Dv={
			$username:req.query.Username,
			$password:req.query.Password
		}
		//processing 2  md5 encripto
		var user=md5(Dv.$username)
		var passw=md5(Dv.$password)
		if(user!==getJson.username){
			res.send('<script>alert("you entered wrong Username")</script>')
		}
		if(passw!==getJson.password){
			res.send('<script>alert("you entered wrong Password")</script>')
		}
		else if(user==getJson.username&&passw==getJson.password){
			res.send('<script>window.location.href="/post/pages.html"</script>')
		}
		
		
	}
	
}
var loginSystem=new Login()

//get values in login 
app.get("/post",loginSystem.login)

//server:port and localhost
var port=(getJson.port==8080)? getJson.port:false

app.listen(port)

console.log("http://localhost:%s",port)











































