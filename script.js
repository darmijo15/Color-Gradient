const gradientPara = document.querySelector("#gradient-para");
const gradientBtn = document.querySelector("#gradient-btn");

gradientBtn.addEventListener('click', function() {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    
    let hex1 = `#`;
    let hex2 = `#`;

    for (let i = 0; i < 6; i++) {
        let randomHexValue = Math.floor(Math.random() * 16);
        hex1 += `${hexValues[randomHexValue]}`;
    }

    for (let i = 0; i < 6; i++) {
        let randomHexValue = Math.floor(Math.random() * 16);
        hex2 += `${hexValues[randomHexValue]}`;
    }

    gradientPara.innerHTML = `background: linear-gradient(to right, ${hex1}, ${hex2})`;
    document.body.style.background = `linear-gradient(to right, ${hex1}, ${hex2}`;
})