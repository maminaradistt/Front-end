let login = prompt("Enter your login: ");
if (login === "Admin") {
    let password = prompt("Enter your password: ");
    if (password === "12345") {
        alert("Welcome!");
    }
    else {
        alert("Wrong password!");
    }
}
else {
    alert("Access is denied");
}