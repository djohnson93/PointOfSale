var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  //IF newItem is not a number
  // THEN show an alert: "Enter price as a number"
  //OTHERWISE,
  // update newItem to its value cast as a number
  // update runningTotal to be its value plus newItem
  // create a variable called dollars
  // call asCurrency() by with the value of runningTotal and assign the return value to dollars
  // update the innerHTML of the span with the id "subtotal" to be dollars
  // update the value of the input with the id "price" to be an empty string
  // update a cookie called "preTax" with the value of runningTotal
  if (newItem= NaN)
  {
    document.getElementById("price").innerHTML = "Enter price as number";
    document.getElementById("subtotal").classList.add("has-error");

  }else {
    document.getElementById("subtotal").classList.add("has-success");
  }
}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(pretax, subtotal, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = pretax + "=" + subtotal + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(pretax) {
    var subtotal = pretax + "price";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(subtotal) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
