{
    const welcome = () => {
        console.log("Hello world!")
    };

    const change_labels = (showAuthorButton) => {
        const authorLabel = document.querySelector(".js-authorLabel")

        if (showAuthorButton.innerText === "Show author") {
            showAuthorButton.innerText = "Hide author"
            authorLabel.innerText = "Author: Paweł Kruczek"
        } else {
            showAuthorButton.innerText = "Show author"
            authorLabel.innerText = ""
        };
    };

    const toggle_author = () => {
        const showAuthorButton = document.querySelector(".js-showAuthorButton")

        showAuthorButton.addEventListener("click", () => change_labels(showAuthorButton));
    };

    const init = () => {
        welcome()
        toggle_author()
    };

    init();


};