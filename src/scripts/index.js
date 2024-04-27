const fetchUserData = async (username) => {
    const user = await fetch(`https://api.github.com/users/${username}`);

    if(user.status === 200){
        const userName = await user.json();
        // console.log(userName);
        
        const userJson = JSON.stringify(userName);
        localStorage.setItem("@githubUserInfo", userJson);
        
        window.location.replace("./src/pages/profile.html");
    }else{
        window.location.replace("./src/pages/error.html");
    };


};


const capturUser = () => {
   const btn = document.querySelector(".index__button");
   const input = document.querySelector(".index__input");
   

   btn.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    const inputCompleted = input.value;
    if(inputCompleted == ""){
        alert ("Insira um nome de usuário válido")
    }else{
        fetchUserData(inputCompleted);
    }    
});
};

capturUser();

