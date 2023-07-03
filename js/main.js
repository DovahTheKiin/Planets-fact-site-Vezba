const hamburgerMenu = document.querySelector(".hamburger-menu")
const body = document.body;
const mobileMenu = document.querySelector(".mobile-menu")
const overviewMenu = document.querySelector(".overview-list-mobile")
const overviewMenuLinks = document.querySelectorAll (".overview-list-mobile > li > a")
const planetImage = document.querySelector(".planet-image")
const geologyImage = document.querySelector(".geology-image")
const overviewList = document.querySelector(".overview-list")
const overviewListButtons = document.querySelectorAll(".overview-list > li")
const overviewListLinks = document.querySelectorAll(".overview-list > li > a")
const overview = document.querySelector(".overview")
const headerMenu = document.querySelector(".header-menu")
const headerMenuLinks = document.querySelectorAll(".header-menu > li > a")

const planetName = document.querySelector(".planet-name")
const planetDescription = document.querySelector(".planet-description")
const source = document.querySelector(".source > a")
const rotation = document.querySelector(".rotation")
const revolution = document.querySelector(".revolution")
const radius = document.querySelector(".radius")
const average = document.querySelector(".average")
const mobileList = document.querySelector(".mobile-list")
const arrowIcon = document.querySelectorAll(".arrow-icon > svg")

hamburgerMenu.addEventListener('click', () => {
    body.classList.toggle("overflow");
    hamburgerMenu.classList.toggle("active-menu");
    mobileMenu.classList.toggle("hidden");
})
let internalImage = "/images/planet-mercury-internal.svg";
let normalImage;
const clickHandler = (ev) => {
    for (const btn of overviewMenuLinks) {
            if (btn === ev.target && !btn.classList.contains("focused")) {
                    btn.classList.add("focused");
            } else if (btn === ev.target && btn.classList.contains("focused")) {
                    btn.classList.add("focused");
            } else {
                    btn.classList.remove("focused");
            }
            if(btn === ev.target && btn.classList.contains("structure-link")) {
                planetImage.src = `${internalImage}`;
            } else if(btn === ev.target && !btn.classList.contains("structure-link")) {
                planetImage.src = `${normalImage}`;
            }
            if(btn === ev.target && btn.classList.contains("surface-link")) {
                geologyImage.classList.remove("hidden");
            } else {
                geologyImage.classList.add("hidden");
            }
    }
}
overviewMenu.addEventListener("click", clickHandler);

const clickHandlerDesktop = (ev) => {
    for (const btnnn of overviewListButtons) {
            if(btnnn === ev.target && btnnn.classList.contains("structure-link")) {
                planetImage.src = `${internalImage}`;
            } else if(btnnn === ev.target && !btnnn.classList.contains("structure-link")) {
                planetImage.src = `${normalImage}`;
            }
            if(btnnn === ev.target && btnnn.classList.contains("surface-link")) {
                geologyImage.classList.remove("hidden");
            } else {
                geologyImage.classList.add("hidden");
            }
    }
    for (const btn of overviewListLinks) {
            if(btn === ev.target && btn.parentNode.classList.contains("structure-link")) {
                planetImage.src = `${internalImage}`;
            } else if(btn === ev.target && !btn.parentNode.classList.contains("structure-link")) {
                planetImage.src = `${normalImage}`;
            }
            if(btn === ev.target && btn.parentNode.classList.contains("surface-link")) {
                geologyImage.classList.remove("hidden");
            }
    }
}
overviewList.addEventListener("click", clickHandlerDesktop);

const clickHandlerButton = (ev) => {
    for (const btn of overviewListButtons) {
            if (btn === ev.target && !btn.classList.contains("focused-mercury")) {
                btn.classList.add("focused-mercury");
            } else if (btn === ev.target && btn.classList.contains("focused-mercury")) {
                btn.classList.add("focused-mercury");
            } else if (btn !== ev.target) {
                btn.classList.remove("focused-mercury");
            }
    }
    for (const btnn of overviewListLinks) {
            if (btnn === ev.target && !btnn.parentNode.classList.contains("focused-mercury")) {
                btnn.parentNode.classList.add("focused-mercury");
            } else if (btnn === ev.target && btnn.classList.contains("focused-mercury")) {
                btnn.parentNode.classList.add("focused-mercury");
            } 
    }
}
overviewList.addEventListener("click", clickHandlerButton);
let i = 0;
function jsonDataFetch() {
    fetch("./data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jobs) {
        planetImage.src = `${jobs[i].images.planet}`;
        geologyImage.src = `${jobs[i].images.geology}`;
        planetName.innerHTML = `${jobs[i].name}`;
        planetDescription.innerHTML = `${jobs[i].overview.content}`;
        source.href = `${jobs[i].overview.source}`;
        const descriptionChange = (ev) => {
            for (const btn of overviewListButtons) {
                if(btn === overviewListButtons[0] && btn.classList.contains("focused-mercury")) {
                    planetName.innerHTML = `${jobs[i].name}`;
                    planetDescription.innerHTML = `${jobs[i].overview.content}`;
                    source.href = `${jobs[i].overview.source}`;
                }
                if(btn === overviewListButtons[1] && btn.classList.contains("focused-mercury")) {
                    planetDescription.innerHTML = `${jobs[i].structure.content}`;
                    source.href = `${jobs[i].structure.source}`;
                }
                if(btn === overviewListButtons[2] && btn.classList.contains("focused-mercury")) {
                    planetDescription.innerHTML = `${jobs[i].geology.content}`;
                    source.href = `${jobs[i].geology.source}`;
                }
            }
        }
        overviewList.addEventListener("click", descriptionChange);

        const descriptionChangeMobile = (ev) => {
            for (const btn of overviewMenuLinks) {
                if(btn === overviewMenuLinks[0] && btn.classList.contains("focused")) {
                    planetName.innerHTML = `${jobs[i].name}`;
                    planetDescription.innerHTML = `${jobs[i].overview.content}`;
                    source.href = `${jobs[i].overview.source}`;
                }
                if(btn === overviewMenuLinks[1] && btn.classList.contains("focused")) {
                    planetDescription.innerHTML = `${jobs[i].structure.content}`;
                    source.href = `${jobs[i].structure.source}`;
                }
                if(btn === overviewMenuLinks[2] && btn.classList.contains("focused")) {
                    planetDescription.innerHTML = `${jobs[i].geology.content}`;
                    source.href = `${jobs[i].geology.source}`;
                }
            }
        }
        overviewMenu.addEventListener("click", descriptionChangeMobile);
        rotation.innerHTML = `${jobs[i].rotation}`;
        revolution.innerHTML = `${jobs[i].revolution}`;
        radius.innerHTML = `${jobs[i].radius}`;
        average.innerHTML = `${jobs[i].temperature}`;
        normalImage = `${jobs[i].images.planet}`;
        internalImage = `${jobs[i].images.internal}`;
        if(overviewListButtons[1].classList.contains("focused-mercury")) {
            planetImage.src = `${internalImage}`;
            planetDescription.innerHTML = `${jobs[i].structure.content}`;
            source.href = `${jobs[i].structure.source}`;
        }
        if(overviewListButtons[2].classList.contains("focused-mercury")) {
            planetDescription.innerHTML = `${jobs[i].geology.content}`;
            source.href = `${jobs[i].geology.source}`;
        }
        if(overviewMenuLinks[1].classList.contains("focused")) {
            planetImage.src = `${internalImage}`;
            planetDescription.innerHTML = `${jobs[i].structure.content}`;
            source.href = `${jobs[i].structure.source}`;
        }
        if(overviewMenuLinks[2].classList.contains("focused")) {
            planetDescription.innerHTML = `${jobs[i].geology.content}`;
            source.href = `${jobs[i].geology.source}`;
        }
    })
}
jsonDataFetch();
const linkChange = (ev) => {
    for (const btn of headerMenuLinks) {
            if (btn === ev.target && !btn.classList.contains("active-link")) {
                btn.classList.add("active-link");
                jsonDataFetch();
            } else if (btn === ev.target && btn.classList.contains("active-link")) {
                btn.classList.add("active-link");
            } else if (btn !== ev.target) {
                btn.classList.remove("active-link");
            }
    }
}

const planetChange = (ev) => {
    for (const btn of headerMenuLinks) {
        if (btn === ev.target) {
            let targetLul = ev.target;
            let list_items = Array.from(headerMenuLinks);
            let indexOfDiv = list_items.indexOf(targetLul);
            i = indexOfDiv;
        } 
    }
}
headerMenu.addEventListener("click", planetChange);
headerMenu.addEventListener("click", linkChange);

const planetChangeMobile = (ev) => {
    for (const btn of arrowIcon) {
        if (btn === ev.target) {
            let targetLul = ev.target;
            let list_items = Array.from(arrowIcon);
            let indexOfDiv = list_items.indexOf(targetLul);
            i = indexOfDiv;
            console.log(i);
        } 
    }
}

const linkChangeMobile = (ev) => {
    for (const btn of arrowIcon) {
            if (btn === ev.target && !btn.classList.contains("active-link-mobile")) {
                btn.classList.add("active-link-mobile");
                jsonDataFetch();
                mobileMenu.classList.add("hidden");
                body.classList.remove("overflow");
            } else if (btn === ev.target && btn.classList.contains("active-link-mobile")) {
                btn.classList.add("active-link-mobile");
            } else if (btn !== ev.target) {
                btn.classList.remove("active-link-mobile");
            }
    }
}
mobileList.addEventListener("click", planetChangeMobile);
mobileList.addEventListener("click", linkChangeMobile);