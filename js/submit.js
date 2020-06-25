
window.addEventListener('load', (event) => {
    setTimeout(function() {
        var prompted = sessionStorage.getItem('prompted');
        if (prompted != 'true') {
            togglePop();
        }
    }, 5000);

    var element = document.getElementById('close');
    element.onclick = function() {
    $('div.offer').toggleClass('hide');
    }

})

//Watching id = 'newsletterSubmit'
var submit = document.getElementById("newsletterSubmit")


if (submit) {
    this.submit.addEventListener("click", sendEmail);
}


// Opens the Newsletter Prompt
function togglePop() {
    $('div.offer').toggleClass('hide');
};


// Sends Email
function sendEmail() {
    var data = {};
    var email = document.forms[0][0].value;
    data['email'] = email;
    console.log(data);

    postEmail(data);
}

function postEmail(data) {
    var data = `email=${data.email}`;
    console.log("postEmail()", data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        if (xhr.status === 200 ) {
            console.log("good", xhr.status);
            saveUser();
            togglePop();
        } else {
            console.log('bad', xhr.status);
            saveUser();
            togglePop();
        }
        // console.log('default', this.responseText);
    }
    });

    xhr.open("GET", "https://hooks.zapier.com/hooks/catch/4038372/oslaa5i");
    xhr.send(data);

}

//Stores to session Storage after newsletter Prompt
function saveUser() {
    sessionStorage.setItem('prompted', 'true');
}