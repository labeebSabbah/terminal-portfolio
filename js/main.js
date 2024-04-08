import {commands} from '/js/commands-list.js';
import {output as input} from '/js/input.js';
import {output as banner} from '/js/commands/banner.js';
import {output as help} from '/js/commands/help.js';

printCommand("banner");
printInput();
document.onkeydown = function(e) {
    console.log(e.key);
    if (!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || e.key === 'Backspace' || e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        return;
    }
    document.getElementById('input').focus();
    const command = $('#input').val();
    if (e.key === 'Enter') {
        $("#input").replaceWith(`<span>${command}</span>`);
        $(".custom-cursor").remove();
        printCommand(command);
        printInput();
        document.querySelector("#root").lastElementChild.scrollIntoView();
    }
}

function printInput() {
    $('#root').append(input);
    $("#input").on("input", changeWidth);
    $("#input").focus();
}

function changeWidth() {
    const input = document.getElementById('input');
    input.style.width = input.value.length === 0 ? '0.5ch' : `${input.value.length}ch`;
}

function printCommand(command) {

    if (!commands.hasOwnProperty(command)) {
        $('#root').append(`<div>${command}: command not found</div>`);
        return;
    }

    if (command === "clear") {
        $('#root').html('');
        return;
    }

    $('#root').append(eval(command));
}