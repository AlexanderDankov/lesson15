function form() {
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    function callBackForm(callback) {

    let form = document.querySelector(callback),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div"),
        close = document.querySelector(".popup-close");

    statusMessage.classList.add("status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
    
    function postData() {
        return new Promise((resolve, reject) =>{

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader ("Content-type", "application/json; charset=utf-8");

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
     });
    let json = JSON.stringify(obj);

    request.onreadystatechange = function() {
      
        if (request.readyState < 4){
            resolve();
        } else if(request.readyState === 4 && request.status == 200){
            resolve();
        } else {
            reject();
        }
    };
    
    request.send(json);
        });
    }

    function clearInput(){
        for (let i = 0; i < input.length; i++){
            input[i].value = "";
        }
    }

    postData()
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput);
    
    close.addEventListener("click", () => {
       if(form.contains(statusMessage)){
        form.removeChild(statusMessage);
        }
    });
        
    }); 

    }
callBackForm('.main-form');
callBackForm('#form');
}

module.exports = form;