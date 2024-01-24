{
    const welcome = () => {
        console.log("Hello World!")
    };

    const changeOutline = (mainImage, travelImages) => {
        mainImage.classList.toggle("mainImage--dottedOutline")
        travelImages.forEach((travelImage) => {
            travelImage.classList.toggle("travelImage--dottedOutline")
        })
    };

    const changeButtonText = (mainImage, switchButtonContent) => {
        mainImage.classList.contains("mainImage--dottedOutline") ?
            switchButtonContent.innerText = "solid"
            : switchButtonContent.innerText = "dotted"
    };

    const init = () => {
        const switchButton = document.querySelector(".js-switchButton")
        const mainImage = document.querySelector(".js-mainImage")
        const travelImages = document.querySelectorAll(".js-travelImage")
        const switchButtonContent = document.querySelector(".js-switchButtonContent")

        welcome();
        switchButton.addEventListener("click", () => {
            changeOutline(mainImage, travelImages)
            changeButtonText(mainImage, switchButtonContent)
        })
    };
    
    init();
};