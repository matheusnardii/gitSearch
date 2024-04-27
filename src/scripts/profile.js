const renderUserInfo = (object) => {
    const img = document.querySelector(".profile__image");
    const username = document.querySelector(".profile__username");

    img.src = object.avatar_url;
    username.innerText = object.name;
};


const getUserFromLocalStorage = () => {
    const userJson = localStorage.getItem("@githubUserInfo");
    const user = JSON.parse(userJson);

    // console.log(user);
    renderUserInfo(user);
};


const indexBtn = () => {
    const btn = document.querySelector(".profile__change-user--button");

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        window.location.replace("../../index.html");
        localStorage.clear("@githubUserInfo");
    });
};


const renderUserRepos = async (userLogin) =>{
    const userJson = localStorage.getItem("@githubUserInfo");
    const user = JSON.parse(userJson);
    userLogin = user.login;

    const requestJson = await fetch(`https://api.github.com/users/${userLogin}/repos`);

    const repositorios = await requestJson.json();
    // console.log(repositorios);

    const ul = document.querySelector(".profile__ul");
    ul.innerHTML = "";

    repositorios.forEach((object) => {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const a = document.createElement("a");

        h4.innerText = object.name;

        if(object.description === null){
            p.innerText = "Repositório sem descrição";
        }else(
            p.innerText = object.description
        );
    
        a.innerText = "Repositório";
        a.href = object.html_url;
        a.target = "_blank"

        li.append(h4, p, a);

        ul.appendChild(li);
    });

};


getUserFromLocalStorage();
indexBtn();
renderUserRepos();