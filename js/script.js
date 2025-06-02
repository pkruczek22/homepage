{
    console.log("Hello world!")

    const showAuthorButton = document.querySelector(".js-showAuthorButton")
    const authorLabel = document.querySelector(".js-authorLabel")

    showAuthorButton.addEventListener("click", () => {
        if (showAuthorButton.innerText === "Show author") {
            showAuthorButton.innerText = "Hide author"
            authorLabel.innerText = "Author: Paweł Kruczek"
        } else {
            showAuthorButton.innerText = "Show author"
            authorLabel.innerText = ""
        };

    });
};