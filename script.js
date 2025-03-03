function startCountdown(button, url) {
    button.disabled = true;
    let count = 5;
    button.innerText = `Please wait ${count} seconds...`;

    let timer = setInterval(() => {
        count--;
        button.innerText = `Please wait ${count} seconds...`;

        if (count <= 0) {
            clearInterval(timer);
            window.location.href = url;
        }
    }, 1000);
    }
