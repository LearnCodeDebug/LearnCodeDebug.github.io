function rep(func, sec) {
    setTimeout(() => {
        document.body.replaceChild(func, document.querySelector("div"));
    }, sec * 1000);
}