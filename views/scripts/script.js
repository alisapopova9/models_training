const { disable } = require("express/lib/application");

const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    submitBtn.classList.add = "disabled";
    submitBtn.disabled = true;
    submitBtn.innerText = "Wait";
    loader.hidden = false;

    fetch(form.action, {
        method: "post",
        body: formData,
    })
        .then((resp) => {
            return resp.blob();
        })
        .then((data) => {
            const a = document.createElement("a");
            a.href = window.URL.createObjectURL(data);
            a.download = "result";
            a.click();
            submitBtn.classList.remove("disabled");
            submitBtn.disabled = false;
            loader.hidden = true;
            submitBtn.innerText = "Train the model";
        })
        .catch((err) => {
            console.error(err);
        });
});
function showBlock(){
    document.getElementById("hiddenBlock").hidden = false;
};


function ChangeLoadBtn(){
    var checkInput = document.getElementById("file-upload");
    if(checkInput.value){
        document.getElementById("loadBtn").removeAttribute('disabled');
        document.getElementById('fileHelpBlock').hidden=true;
    }

}

function EnableBtns(){
    event.preventDefault(); //убрать при отправке запроса
    var checkInput = document.getElementById("file-upload");
    document.getElementById('fileHelpBlock').hidden=false;
    document.getElementById('fileHelpBlock').textContent=`Файл "${checkInput.value}" успешно загружен!`;
    document.getElementById('watchDataBtn').removeAttribute('disabled');
    document.getElementById('learnModelBtn').removeAttribute('disabled');

}

