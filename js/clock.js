function showTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.toLocaleDateString('tr', { weekday: 'long' });

    const timeString = `${hours}:${minutes}:${seconds} ${day}`;

    document.getElementById('myClock').innerText = timeString;

    setTimeout(showTime, 1000);
}

function getUserName() {
    let userName = prompt("Adınızı Giriniz");
    if (!userName) {
        userName = "Misafir";
    }
    document.getElementById('myName').innerText = userName;
}

window.onload = function () {
    getUserName();
    showTime();
};