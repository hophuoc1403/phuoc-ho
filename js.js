function calculation() {
    var calc = document.getElementById('calc').value
    var input1 = document.querySelector("#input1").value
    var input2 = document.querySelector("#input2").value
    var result = document.querySelector("#result")
    switch (calc) {
        case '+':
            result.value = parseInt(input1) + parseInt(input2)
            break;
        case '-':
            result.value = parseInt(input1) - parseInt(input2)
            break
        case '*':
            result.value = parseInt(input1) * parseInt(input2)
            break
        case '/':
            result.value = parseInt(input1) / parseInt(input2)
        default:
            break;
    }
}