class Typing {
    constructor({ el, interval, delay }) {
        this.el = document.querySelector(el);
        this.interval = interval || 500
        this.delay = delay == undefined ? 1000 : delay
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ""
        setTimeout(() => this.write(), this.delay);
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => this.write(i), this.interval);
        }
    }
}
new Typing({
    el: ".header__content h1",
    interval: 300,
    delay: 1000
})
new Typing({
    el: ".header__content p",
    interval: 200,
    delay: 500
})
new Typing({
    el: ".info__scroll-desc",
    interval: 100,
    delay: 0
})

const mousover = document.querySelector('.header__content');
mousover.addEventListener('mouseover', function () {
    yurishi(mousover);

    function yurishi(el) {
        let x = window.innerWidth - el.offsetWidth;
        let y = window.innerHeight - el.offsetHeight;
        const newLeft = Math.floor(Math.random() * x);
        const newTop = Math.floor(Math.random() * y);
        el.style.marginLeft = `${newLeft}px`;
        el.style.marginTop = `${newTop}px`;
    }
});

// const title = document.querySelector('.header__content h1');
// let text = title.innerHTML
// title.innerHTML = ''
// function write(i = 0) {
//     title.innerHTML += text[i]
//     i++
//     if (i < text.length) {
//         setTimeout(() => {
//             write(i)
//         }, 100)
//     }
//     ;
// }
// write()