let operations = ['plus', 'minus', 'into', 'divide', 'modulo']
let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ...operations]
let operators = ['/','-', '+', '*', '%'];

let inputElement = document.getElementById("input");
let ans = document.getElementById("ans");

for(let button of buttons){
    document.getElementById(button).onclick = e => {
        if(operations.includes(button)){
            if(inputElement.textContent){
                if(!operators.some(l => inputElement.textContent.includes(l))){
                    inputElement.textContent += e.target.textContent;
                }else{
                    if(operators.includes(inputElement.textContent[inputElement.textContent.length-1])){
                        inputElement.textContent = inputElement.textContent.slice(0, inputElement.textContent.length-1) + e.target.textContent;
                    }
                }
            }            
        }else{
            inputElement.textContent += e.target.textContent;
        }
    }
}

let equal = document.getElementById("equal");
equal.addEventListener('click', e => {
    for(let i of operators){
        if(inputElement.textContent.includes(i)){
            let vals = inputElement.textContent.split(i);
            if(vals[1]){
                switch(i){
                    case '+':
                        ans.textContent = Number(vals[0]) + Number(vals[1]);
                        break;
                    case '-':
                        ans.textContent = Number(vals[0]) - Number(vals[1]);
                        break;
                    case '*':
                        ans.textContent = Number(vals[0]) * Number(vals[1]);
                        break;
                    case '/':
                        ans.textContent = Number(vals[0]) / Number(vals[1]);
                        break;
                    case '%':
                        ans.textContent = Number(vals[0]) % Number(vals[1]);
                        break;                
                }
            }            
        }
    }
})

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', e => {
    inputElement.textContent = "";
    ans.textContent = "";
})