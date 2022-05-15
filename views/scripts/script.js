const { disable } = require("express/lib/application");
const nodemon = require("nodemon");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    submitButton.classList.add = "disabled";
    submitButton.disabled = true;
    submitButton.innerText = "Wait";
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
            submitButton.classList.remove("disabled");
            submitButton.disabled = false;
            loader.hidden = true;
            submitButton.innerText = "Train the model";
        })
        .catch((err) => {
            console.error(err);
        });
});

function changeLoadButton(input) {
    const checkInput = document.getElementById("file-upload");
    if (checkInput.value) {
        document.getElementById("loadButton").removeAttribute("disabled");
    }
}

function getFilename(fullPath) {
  return fullPath.replace(/^.*[\\\/]/, "");
}

function enableButtons() {
    // TODO: убрать при отправке запроса
    event.preventDefault();
    const checkInput = document.getElementById("file-upload");
    document.getElementById("fileHelpBlock").textContent = "Файл "+ getFilename(checkInput.value) +" успешно загружен!";
}

function previewFile(input) {
    const [file] = input.files;
    const uploadFile = new FileReader();
  
    uploadFile.addEventListener("load", () => {
      if((uploadFile.result.indexOf("intent")===0)&&(uploadFile.result.indexOf("message")===7)&&(uploadFile.result.indexOf("\r")===14)){
        enableButtons();
      }
      else{
        let errorModal = new bootstrap.Modal(document.getElementById("error1"));
        errorModal.show();
      }
      
    }, false);

    if (file) {
        uploadFile.readAsText(file);
    }
}