const help = `
        <br>
        <br>
        <br>
        <b>Available commands:</b>
        <br>
        <br>
        ${Object.keys(commands).map(command => `<b>${command}</b>: ${commands[command]}`).join('<br>')}
        <br>
        <br>
        <br>

`;