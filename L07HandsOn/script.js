function regexChecker() {
    const regex = /^[A-Z][a-zA-Z]+$/;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    if (firstName.match(regex) && lastName.match(regex)) {
        alert('Yay! Your inputs were all correct!');
    }
    else {
        alert('Oh no! That\'s an invalid format!');
    }
}

var btn = document.getElementById('btn');
btn.addEventListener("click", regexChecker);
