const changeText = () => {
    document.querySelector("#text").innerHTML = "Bye";
    document.querySelector("#text").style.color = "#6495ED";
    let pTags = document.querySelectorAll("p");

    const colors = [
        "#ffffff"
    ];
    
    for(let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = colors[Math.floor(Math.random() * (colors.length - 1))];
    }
}