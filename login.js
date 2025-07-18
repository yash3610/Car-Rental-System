login
var count = 2;

function validate ()
{
   var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var usernameArray = ["yash"]
   var passwordArray = ["123"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray[i])
if (password == passwordArray [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location.href = "index.html";
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   //alert("Wrong password or username")
   count--;
}

var user = document.login.username.value;
   var password = document.login.password.value;
   var valid = false;
   var usernameArray1 = ["tanvi"]
   var passwordArray1 = ["456"]
   for (var i = 0; i < usernameArray.length; i++)

if (user == usernameArray1[i])
if (password == passwordArray1 [i])
{
   valid = true;
   break;
}

if(valid)
{
   alert("Login was successful");
   window.location.href = "payment.html";
   return false ;
}
var again = "tries";
if (count ==1)
{
   again = "try"
}
if(count >= 1)
{
   //alert("Wrong password or username")
   count--;
}
}