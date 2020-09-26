
function addChar(input, character) {
    if(input.value == null || input.value == "0")
    input.value = character
    else
    input.value += character
}
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}

//
function compute(form) {
    form.display.value = eval(form.display.value);
}
function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
}