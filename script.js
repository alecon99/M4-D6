const endpoint = "https://jsonplaceholder.typicode.com/users";

const resultsBox = document.getElementById("results-box");
const btnChoose = document.getElementById("button-choose");
const btnSearch =document.getElementById("button-search");
const nameSelector = document.getElementById("name-selector");
const usernameSelector = document.getElementById("username-selector");
const emailSelector = document.getElementById("email-selector");
const inputRes = document.getElementById("input-research");
let inputResValue = "";

async function userList(){
    try {
        const res = await fetch(endpoint);
        const json = await res.json();
        json.forEach(element => {
            const newTr = document.createElement("tr");
            const myName = document.createElement("td");
            myName.innerText = element.name;
            const myUser = document.createElement("td")
            myUser.innerText = element.username;
            const myEmail = document.createElement("td")
            myEmail.innerText = element.email;

            newTr.append(myName,myUser,myEmail);
            resultsBox.appendChild(newTr);
        });
    } catch(error) {
        console.log(error);
    }
}

window.onload = userList();

nameSelector.addEventListener("click",()=>{
    btnChoose.innerHTML="NAME";
});

usernameSelector.addEventListener("click",()=>{
    btnChoose.innerHTML="USERNAME";
});

emailSelector.addEventListener("click",()=>{
    btnChoose.innerHTML="EMAIL";
});

btnSearch.addEventListener("click",research);

async function research(){
    resultsBox.innerHTML= "";

}