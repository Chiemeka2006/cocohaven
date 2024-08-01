

function reservationSectionLanding() {
    let input = document.querySelectorAll(".input");
    let label = document.querySelectorAll(
        ".reservation__container__booking__form__input label"
    );
    let div = document.querySelectorAll(
        ".reservation__container__booking__form__input"
    );
    let dialog = document.querySelector("dialog");
    let dialogBtnOpen = document.querySelector(
        ".reservation__container__booking__shop"
    );
    let dialogBtnClose = document.querySelector(".popup__wrapper__btn");
    let wrapper = document.querySelector(".popup__wrapper");
    let time = document.querySelector(".time");
    let date = document.querySelector(".date");
    let dateInput = document.querySelector(".input-date");
    let timeInput = document.querySelector(".input-time");

    input.forEach((inputs, i) => {
        input[i].addEventListener("input", () => {
            let inputValue = input[i].value;
            let inputValue2 = inputs.value;
            console.log(dateInput.value);

            if (inputValue !== "") {
                label[i].classList.add("move-up");
            } else {
                label[i].classList.remove("move-up");
            }

            date.innerHTML = dateInput.value;
            time.innerHTML = timeInput.value;

            //Form validation
            // dialog.showModal()
        });
        function popUp() {
            dialogBtnOpen.addEventListener("click", () => {
                //code to make dialog appear after all input isn't empty

                if (
                    input[0].value !== "" &&
                    input[1].value !== "" &&
                    input[2].value !== "" &&
                    input[3].value !== "" &&
                    input[4].value !== ""
                ) {
                    console.log("open");
                    dialog.showModal();
                    dialog.classList.add("dialog-open");
                }
            });

            dialogBtnClose.addEventListener("click", () => {
                dialog.close();
                dialog.classList.remove("dialog-open");
                console.log("close");
                input[i].value = "";
                label[i].classList.remove("move-up");
            });

            dialog.addEventListener("click", (e) => {
                if (!wrapper.contains(e.target)) {
                    dialog.close();
                    dialog.classList.remove("dialog-open");
                    console.log("close");
                    input[i].value = "";
                    label[i].classList.remove("move-up");
                }
            });
        }

        popUp();
    });
}

reservationSectionLanding();

function menu() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        line1.classList.toggle("line1-45deg");
        line2.classList.toggle("line2-opacity");
        line3.classList.toggle("line3-45deg");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("active");
            line1.classList.remove("line1-45deg");
            line2.classList.remove("line2-opacity");
            line3.classList.remove("line3-45deg");
        }
    });
}

menu();

let img = document.querySelectorAll(".category__layout__grid__container img");

img.forEach((imgs, i) => {
    img[i].addEventListener("mouseover", () => {
        img[i].classList.add("scale");
        console.log("GOOd to go ");
    });
    img[i].addEventListener("mouseout", () => {
        img[i].classList.remove("scale");
        console.log("GOOd to go ");
    });
});

function accordion() {
    const accordionHead = document.querySelectorAll(
        ".faq__layout__accordion__container__head"
    );
    const accordionContent = document.querySelectorAll(
        ".faq__layout__accordion__container__p"
    );

    const accordionimg = document.querySelectorAll(
        ".faq__layout__accordion__container__head__img img"
    );

    accordionHead.forEach((accordionHeads, i) => {
        accordionHead[i].addEventListener("click", () => {
            console.log("working opne");
            // accordionContent.forEach((accordionContents, f) => {
            accordionContent[i].classList.toggle("accordion-active");
            // })
            accordionimg[i].classList.toggle('rotate-img')
        });
        document.addEventListener('click', (e) => {
            if (!accordionContent[i].contains(e.target) && !accordionHead[i].contains(e.target)) {
            accordionContent[i].classList.remove("accordion-active");
            accordionimg[i].classList.remove("rotate-img");
            }
        })

    });
}

accordion();
