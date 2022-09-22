var body = document.body;

// AREA INPUTS
var container = document.createElement("section");
var inputs = document.createElement("div");
var inputNum1 = document.createElement("input");
var inputNum2 = document.createElement("input");

container.classList.add("container");
inputs.classList.add("inputs");

inputNum1.placeholder = "Digite o primeiro número";
inputNum1.setAttribute("type", "number");

inputNum2.placeholder = "Digite o segundo número";
inputNum2.setAttribute("type", "number");


// AREA BUTTONS
var buttons = document.createElement("div");
var sumBtn = document.createElement("button");
var subtractBtn = document.createElement("button");
var multiplyBtn = document.createElement("button");
var divisionBtn = document.createElement("button");

buttons.classList.add("buttons");
sumBtn.setAttribute("type", "submit");
sumBtn.setAttribute("onclick", "sum()");
sumBtn.textContent = "Somar";

subtractBtn.setAttribute("type", "submit");
subtractBtn.setAttribute("onclick", "subtract()");
subtractBtn.textContent = "Subtrair";

multiplyBtn.setAttribute("type", "submit");
multiplyBtn.setAttribute("onclick", "multiplication()");
multiplyBtn.textContent = "Multiplicar";

divisionBtn.setAttribute("type", "submit");
divisionBtn.setAttribute("onclick", "division()");
divisionBtn.textContent = "Dividir";


// AREA RESULT
var resultadoDiv = document.createElement("div");
var resultado = document.createElement("h1");
resultado.textContent = "O resultado irá aparecer aqui";

resultadoDiv.classList.add("resultado");


// AREA APPEND
body.appendChild(container);
container.appendChild(inputs);
inputs.appendChild(inputNum1);
inputs.appendChild(inputNum2);

container.appendChild(buttons);
buttons.appendChild(sumBtn);
buttons.appendChild(subtractBtn);
buttons.appendChild(multiplyBtn);
buttons.appendChild(divisionBtn);

container.appendChild(resultadoDiv);
resultadoDiv.appendChild(resultado);


// AREA SCRIPT
const arr = [inputNum1, inputNum2];
for (let element of arr) {
    element.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            if (element.value == "") {
                alert("Caixas vazias");
                return;
            }
            alert("Por favor, escolha alguma das opções abaixo.");
        }
    })
}

const sum = () => {
    let maxLength = 19;
    if (inputNum1.value == "" || inputNum2.value == "") {
        alert("Alguma caixa de texto está vazia, confira.");
        resultadoDiv.style.display = "none"
        return
    } else if (inputNum1.value.length > maxLength || inputNum2.value.length > maxLength) {
        alert("O tamanho dos valores digitados ultrapassa o tamanho permitido de " + maxLength + " caracteres.");
        return
    }
    let result = Number(inputNum1.value) + Number(inputNum2.value);
    resultadoDiv.style.display = "block";
    resultado.style.animation = "";
    setTimeout(() => {
        resultado.style.animation = "surgir 1s ease-out .5s 1 forwards";
    }, 5)
    resultado.textContent = `${inputNum1.value} + ${inputNum2.value} = ${result}`;
}

const subtract = () => {
    let maxLength = 19;
    if (inputNum1.value == "" || inputNum2.value == "") {
        alert("Alguma caixa de texto está vazia, confira.");
        resultadoDiv.style.display = "none"
        return
    } else if (inputNum1.value.length > maxLength || inputNum2.value.length > maxLength) {
        alert("O tamanho dos valores digitados ultrapassa o tamanho permitido de " + maxLength + " caracteres.");
        return
    }
    let result = Number(inputNum1.value) - Number(inputNum2.value);
    resultadoDiv.style.display = "block";
    resultado.style.animation = "";
    setTimeout(() => {
        resultado.style.animation = "surgir 1s ease-out .5s 1 forwards";
    }, 5)
    resultado.textContent = `${inputNum1.value} - ${inputNum2.value} = ${result}`;
}

const multiplication = () => {
    let maxLength = 19;
    if (inputNum1.value == "" || inputNum2.value == "") {
        alert("Alguma caixa de texto está vazia, confira.");
        resultadoDiv.style.display = "none"
        return
    } else if (inputNum1.value.length > maxLength || inputNum2.value.length > maxLength) {
        alert("O tamanho dos valores digitados ultrapassa o tamanho permitido de " + maxLength + " caracteres.");
        return
    }
    let result = Number(inputNum1.value) * Number(inputNum2.value);
    resultadoDiv.style.display = "block";
    resultado.style.animation = "";
    setTimeout(() => {
        resultado.style.animation = "surgir 1s ease-out .5s 1 forwards";
    }, 5)
    resultado.textContent = `${inputNum1.value} * ${inputNum2.value} = ${result}`;
}

const division = () => {
    let maxLength = 19;
    if (inputNum1.value == "" || inputNum2.value == "") {
        alert("Alguma caixa de texto está vazia, confira.");
        resultadoDiv.style.display = "none"
        return
    } else if (inputNum1.value.length > maxLength || inputNum2.value.length > maxLength) {
        alert("O tamanho dos valores digitados ultrapassa o tamanho permitido de " + maxLength + " caracteres.");
        return
    }
    let result = Number(inputNum1.value) / Number(inputNum2.value);
    resultadoDiv.style.display = "block";
    resultado.style.animation = "";
    setTimeout(() => {
        resultado.style.animation = "surgir 1s ease-out .5s 1 forwards";
    }, 5)
    resultado.textContent = `${inputNum1.value} / ${inputNum2.value} = ${result}`;
}