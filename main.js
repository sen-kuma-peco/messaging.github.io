var username = prompt("Enter a username.")


while(username == null || username == "") {
    alert("You must enter in a username.")
    var username = prompt("Enter a username.")
}


function start() {
    var messageSent = document.getElementById("inputBox").value
    document.getElementById("output").innerHTML = "<div><h3>" + username + "</h3><h3>" + messageSent + "</h3></div>"

}