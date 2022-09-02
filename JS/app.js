const boxs = document.querySelectorAll(".main-box .box");
const control = document.querySelectorAll(".control div");
const massage = document.querySelector("#massage");
let count = 0;
// add X || O Letter in box 
boxs.forEach((box, i) => {
    boxs[i].addEventListener("click", () => {
        if (box.innerHTML === "") {
            control.forEach((letter) => {
                if (letter.classList.contains("active")) {
                    box.innerHTML = letter.innerHTML;
                    count += 1;
                    // if (count === boxs.length) {
                    //     check();
                    //     finishGame();
                    // }
                    if (letter.id === "o") {
                        box.style.color = "#fff";
                    }
                }
                letter.classList.toggle("active");
            });
        };

        // Check 
        check();

    });
});


// function to Check Winner or Draw 
//  the function must be Improve in the future
function check() {
    boxs.forEach((box) => {
        if (
            boxs[0].innerHTML === boxs[1].innerHTML &&
            boxs[1].innerHTML === boxs[2].innerHTML &&
            boxs[0].innerHTML !== ""
        ) {
            boxs[0].style.backgroundColor = "#0f0";
            boxs[1].style.backgroundColor = "#0f0";
            boxs[2].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[0].innerHTML)
            }, 500);
            // //////////////////////
        } else if (
            boxs[0].innerHTML === boxs[3].innerHTML &&
            boxs[3].innerHTML === boxs[6].innerHTML &&
            boxs[0].innerHTML !== ""
        ) {
            boxs[0].style.backgroundColor = "#0f0";
            boxs[3].style.backgroundColor = "#0f0";
            boxs[6].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[0].innerHTML)
            }, 500);
            // ///////////////////////////
        } else if (
            boxs[0].innerHTML === boxs[4].innerHTML &&
            boxs[4].innerHTML === boxs[8].innerHTML &&
            boxs[0].innerHTML !== ""
        ) {
            boxs[0].style.backgroundColor = "#0f0";
            boxs[4].style.backgroundColor = "#0f0";
            boxs[8].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[0].innerHTML)
            }, 500);
        } else if (
            // //////////////////////
            boxs[1].innerHTML === boxs[4].innerHTML &&
            boxs[4].innerHTML === boxs[7].innerHTML &&
            boxs[1].innerHTML !== ""
        ) {
            boxs[1].style.backgroundColor = "#0f0";
            boxs[4].style.backgroundColor = "#0f0";
            boxs[7].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[1].innerHTML)
            }, 500);
            // ///////////////
        } else if (
            boxs[2].innerHTML === boxs[5].innerHTML &&
            boxs[5].innerHTML === boxs[8].innerHTML &&
            boxs[2].innerHTML !== ""
        ) {
            boxs[2].style.backgroundColor = "#0f0";
            boxs[5].style.backgroundColor = "#0f0";
            boxs[8].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[2].innerHTML)
            }, 500);
            // //////////////////
        } else if (
            boxs[2].innerHTML === boxs[4].innerHTML &&
            boxs[4].innerHTML === boxs[6].innerHTML &&
            boxs[2].innerHTML !== ""
        ) {
            boxs[2].style.backgroundColor = "#0f0";
            boxs[4].style.backgroundColor = "#0f0";
            boxs[6].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[2].innerHTML)
            }, 500);
        } else if (
            boxs[3].innerHTML === boxs[4].innerHTML &&
            boxs[4].innerHTML === boxs[5].innerHTML &&
            boxs[3].innerHTML !== ""
        ) {
            boxs[3].style.backgroundColor = "#0f0";
            boxs[4].style.backgroundColor = "#0f0";
            boxs[5].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[3].innerHTML)
            }, 500);
        } else if (
            boxs[6].innerHTML === boxs[7].innerHTML &&
            boxs[7].innerHTML === boxs[8].innerHTML &&
            boxs[6].innerHTML !== ""
        ) {
            boxs[6].style.backgroundColor = "#0f0";
            boxs[7].style.backgroundColor = "#0f0";
            boxs[8].style.backgroundColor = "#0f0";
            setTimeout(() => {
                finishGame(boxs[6].innerHTML)
            }, 500);
        } else if (count === boxs.length) {
            finishGame();
        }
    })
    
}



// function to Finish Game and Show Result Massage
function finishGame(char) {
    if (count === boxs.length) {
        count = 0;
        document.querySelector(".main-box").style.display = "none";
        document.querySelector('.control').style.display = "none";
        massage.children[0].innerHTML =
    ` <i class="fa-solid fa-xmark fa-4x"></i> <i class="fa-solid fa-o fa-4x"></i> <p id="winner">Draw</p`;
        massage.style.display = "block";
    } else {
        document.querySelector(".main-box").style.display = "none";
        document.querySelector('.control').style.display = "none";
        massage.children[0].innerHTML = `${char} <p id="winner">Win</p`;
        massage.style.display = "block";
    }
}