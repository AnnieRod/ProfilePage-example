var pplname = document.querySelector("h2");
var reqnumber = document.querySelector("#requestnum");
var frinumber = document.querySelector("#friendsnum");

function addUser (id) {
    var newuser = document.querySelector(id);
    newuser.remove();
    reqnumber.innerText--;
    frinumber.innerText++;
}

function byeUser(id) {
    var newuser = document.querySelector(id);
    newuser.remove();
    reqnumber.innerText--;
}

// function newName(){
//     pplname.innerText = "Annie Rod";
// }

// function byeUser1 () {
//     var person = document.querySelector("#user1");
//     person.remove();
//     reqnumber.innerText--;
// }

// function byeUser2 () {
//     var person = document.querySelector("#user2");
//     person.remove();
//     reqnumber.innerText--;
// }

// function addUser1() {
//     var person = document.querySelector("#user1");
//     person.remove();
//     reqnumber.innerHTML--;
//     frinumber.innerHTML++;
// }

// function addUser2() {
//     var person = document.querySelector("#user2");
//     person.remove();
//     reqnumber.innerHTML--;
//     frinumber.innerHTML++;
// }
