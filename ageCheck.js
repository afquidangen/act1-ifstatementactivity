function askAge () {
    let age = prompt("Enter your age: ");
    if (age < 13 && age > 0) {
        alert("You are a child.");
    } else if (age >= 13 && age <= 19) {
        alert("You are a teenager.");
    } else if (age > 19) {
        alert("You are an adult.");
    } else {
        alert("Invalid input.");
    }
}