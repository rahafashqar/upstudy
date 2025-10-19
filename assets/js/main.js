const scrollNavbar = ()=>{
    const navbar = document.querySelector("header .navbar");
    const navbarLinks = Array.from(document.querySelectorAll("header .navbar a"));
    const expandMenuIcon = Array.from(document.querySelectorAll("header .navbar .expand_menu"));
    const cartShoppingIcon = document.querySelector(".cart_shopping");
    const menuIcon = document.querySelector(".menu_icon");


// scroll event (changes on header)
window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 50){
        navbar.classList.add("top-0");
        navbar.classList.add("bg_white");
        navbarLinks.forEach((link)=>{
            link.classList.add("text_black");
        })
        expandMenuIcon.forEach((icon)=>{
            icon.classList.add("text_black");
        })
        cartShoppingIcon.classList.add("text_black");
        menuIcon.classList.add("text_black");
    }
    else {
        navbar.classList.remove("top-0");
        navbar.classList.remove("bg_white");
        navbarLinks.forEach((link)=>{
            link.classList.remove("text_black");
        })
        expandMenuIcon.forEach((icon)=>{
            icon.classList.remove("text_black");
        }) 
        cartShoppingIcon.classList.remove("text_black");
        menuIcon.classList.remove("text_black");
    }
})
}

scrollNavbar();

// modal (trainers section)
const customModal = ()=>{
    const myModal = document.querySelector(".my_modal");
    const modalImage = document.querySelector(".modal_img");
    const trainersImagesForClick = Array.from(document.querySelectorAll(".trainer_img_top_layer")); // because there is a top layer above every image 
    const trainersImages = Array.from(document.querySelectorAll(".trainer_image")); 
    const closeBtn = document.querySelector(".x_mark");
    const rightBtn = document.querySelector(".right_arrow_mark");
    const leftBtn = document.querySelector(".left_arrow_mark");

let currentIndex;
let isOpen = false;

const showModal = ()=>{
    myModal.classList.add("show_modal");
    myModal.classList.remove("hide_modal");
    isOpen = true;
}
const hideModal = ()=>{
    myModal.classList.add("hide_modal");
    myModal.classList.remove("show_modal");
    isOpen = false;
}
const nextImage = ()=>{
    if(currentIndex >= trainersImages.length-1) currentIndex=-1;
    modalImage.setAttribute("src", trainersImages[++currentIndex].getAttribute("src"));
}
const prevImage = ()=>{
    if(currentIndex == 0 ) currentIndex = trainersImages.length;
    modalImage.setAttribute("src", trainersImages[--currentIndex].getAttribute("src"));
}

trainersImagesForClick.forEach(img=>{
    img.addEventListener("click", e=>{
        currentIndex = trainersImagesForClick.indexOf(e.target);
        showModal();
        modalImage.setAttribute("src", trainersImages[currentIndex].getAttribute("src"));
    })
})

document.addEventListener("keydown", (e)=>{
    if(e.code === 'ArrowRight')
         nextImage();
    else if(e.code === 'ArrowLeft')
        prevImage();
    else if(e.code === 'Escape')
        hideModal();
})

document.addEventListener("click", e=>{
    if(isOpen==true && e.target == myModal)
        hideModal();
})
closeBtn.addEventListener("click", hideModal);
rightBtn.addEventListener("click", nextImage);
leftBtn.addEventListener("click", prevImage);
}

customModal();
