function reservationSectionLanding() {
    let input = document.querySelectorAll(
        ".hero__layout__grid__container__input"
    );
    let textArea = document.querySelector(
        ".hero__layout__grid__container__textarea"
    );
    let label = document.querySelectorAll(
        ".label-input"
    );
    let labelTextArea = document.querySelector(
        ".label-textarea"
    );
    let div = document.querySelectorAll(
        ".reservation__container__booking__form__input"
    );
    let dialog = document.querySelector("dialog");
    let dialogBtnOpen = document.querySelector(".dialog-btn");
    let dialogBtnClose = document.querySelector(".popup__wrapper__btn");
    let wrapper = document.querySelector(".popup__wrapper");
    let time = document.querySelector(".time");
    let date = document.querySelector(".date");
    let dateInput = document.querySelector(".input-date");
    let timeInput = document.querySelector(".input-time");

    textArea.addEventListener('input', () => {
            let textAreaValue = textArea.value;
            console.log(textArea.value);
            console.log(label[3])
            if (textAreaValue !== "") {
                labelTextArea.classList.add("move-up-textarea");
                console.log("working");
            } else {
                labelTextArea.classList.remove("move-up-textarea");
                console.log("closing");
            }

    })

    input.forEach((inputs, i) => {
        input[i].addEventListener("input", () => {
            let inputValue = input[i].value;
            // let inputValue2 = inputs.value;
            console.log(inputValue)

            // label.forEach((labels, f) => {
                if (inputValue !== "") {
                label[i].classList.add("move-up");
                console.log('working')
            } else {
                label[i].classList.remove("move-up");
                console.log('closing')
            }
            // })

            

            // date.innerHTML = dateInput.value;
            // time.innerHTML = timeInput.value;

            //Form validation
            // dialog.showModal()
        });
        function popUp() {
            dialogBtnOpen.addEventListener("click", () => {
                //code to make dialog appear after all input isn't empty
                console.log('opening')

                if (
                    input[0].value !== "" &&
                    input[1].value !== "" &&
                    input[2].value !== ""
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

reservationSectionLanding()
