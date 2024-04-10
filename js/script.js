{
    const welcome = () => {
        console.log("Hello World!")
    };

    const changeOutline = (mainImage) => {
        const travelImages = document.querySelectorAll(".js-travelImage")

        mainImage.classList.toggle("mainImage--dottedOutline")
        travelImages.forEach((travelImage) => {
            travelImage.classList.toggle("travelImage--dottedOutline")
        })
    };

    const changeButtonText = (mainImage) => {
        const switchButtonContent = document.querySelector(".js-switchButtonContent")

        mainImage.classList.contains("mainImage--dottedOutline") ?
            switchButtonContent.innerText = "solid"
            : switchButtonContent.innerText = "dotted"
    };

    const init = () => {
        const switchButton = document.querySelector(".js-switchButton")
        const mainImage = document.querySelector(".js-mainImage")

        welcome();
        switchButton.addEventListener("click", () => {
            changeOutline(mainImage)
            changeButtonText(mainImage)
        })
    };
    
    init();
};