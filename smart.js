function updateTime() {
    const now = new Date();

    // Dia
    const day = now.getDate();
    document.getElementById('data1').innerHTML = `${14 - day} <br> Dias`;

    // Hora
    const hour = now.getHours();
    document.getElementById('data2').innerHTML = `${hour} <br> Horas`;

    // Minuto
    const minute = now.getMinutes();
    document.getElementById('data3').innerHTML = `${minute} <br> Minutos`;

    // Segundo
    const second = now.getSeconds();
    document.getElementById('data4').innerHTML = `${second} <br> Segundos`;
}

// Atualiza a cada segundo
setInterval(updateTime, 1000);

// Chama a função uma vez ao carregar a página para exibir o tempo imediatamente
updateTime();



function saber() {
    alert('Em breve traremos mais informações!')
}
