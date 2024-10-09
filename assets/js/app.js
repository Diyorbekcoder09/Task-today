const input = document.querySelector(".input");
const inputIcon = document.querySelector(".fa-x");
const Create = document.querySelector(".btn");
const form = document.querySelector(".form");
const bodyEl = document.querySelector(".body_task");
const DeleteEl = document.querySelector(".delete");
const searchEl = document.querySelector(".qidirish");




inputIcon.addEventListener("click", () => {

    input.value = "";
});

DeleteEl.addEventListener("click", () => {
    const conform = confirm("rostdan o'chirasizmi?")
    if (conform === true) {
        bodyEl.innerHTML = ""
        input.value = "";

    }


})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let date = new Date();

    let soat = date.getHours()
    let minut = date.getMinutes()
    let secund = date.getSeconds()

    let vaqt = soat + ":" + minut + ":" + secund

    const divEl = document.createElement("div");
    const pEl = document.createElement("p");
    const btnDiv = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const btn4 = document.createElement("button");


    pEl.innerText = input.value;






    divEl.className = "card"
    btnDiv.className = "btn_ota"
    btn1.className = "row"
    btn2.className = "row2"
    btn3.className = "row3 "
    btn4.className = "row4"

    btn1.innerHTML = '<i class="fa-regular fa-circle-check"></i> Confirm';
    btn2.innerHTML = '<i class="fa-regular fa-pen-to-square"></i> Edit';
    btn3.innerHTML = '<i class="fa-regular fa-clock"></i> ' + vaqt;
    btn4.innerHTML = '<i class="fa-solid fa-trash"></i> Delete';




    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    btnDiv.appendChild(btn3);
    btnDiv.appendChild(btn4);
    divEl.appendChild(btnDiv)
    divEl.appendChild(pEl);
    divEl.appendChild(btnDiv);
    bodyEl.prepend(divEl);


    input.value = "";

    btn1.addEventListener("click", () => {
        pEl.classList.toggle("text");
    });
    btn4.addEventListener("click", () => {
        const close = confirm("rostdan o'chirilsinmi")

        if (close === true) {
            divEl.remove()
        }
    })


    btn2.addEventListener("click", () => {
        if (pEl.hasAttribute("contenteditable")) {
            pEl.removeAttribute("contenteditable")
            pEl.style.border = "none"
            btn2.innerHTML = 'Edit '
            btn2, style.background = "#ebcc908";
        }
        else{
            pEl.setAttribute("contenteditable" , true);
            pEl.style.border = "1px solid gray";
            btn2.innerHTML = 'Done'
            btn2.style.background = "purple";
        }
    })




})

searchEl.addEventListener("input", (e) => {
    e.preventDefault();

    const alltaskEl = document.querySelectorAll(".card")
    alltaskEl.forEach((e) => {

        let searchValue = searchEl.value.toLowerCase();

        if (e.firstChild.textContent.toLowerCase().indexOf(searchValue) === -1) {
            e.style.display = "none"
        }

        else {
            e.style.display = "block"

        }

    })
})