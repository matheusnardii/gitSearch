const redirectToHomePage = () => {
    const btn = document.querySelector(".new-search__button")

    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        event.stopPropagation();

        window.location.replace("../../index.html");
    })
};
redirectToHomePage();