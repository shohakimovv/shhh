// class Human {
//     constructor(obj) {
//         this.name = obj.name
//         this.age = obj.age
//     }
//     getInfo() {
//         return `Your name is ${this.name}. Your age is ${this.age}`
//     }

// }
// const Alisher = new Human({
//     name: "Alisher",
//     age: 25
// })
// const Sardor = new Human({
//     name: "Sardor",
//     age: 15
// })
// console.log(Alisher.getInfo());
// console.log(Sardor.getInfo());

// class Woman extends Human {
//     constructor(props) {
//         super(props)
//         this.gender = 'female'
//     }
//     info() {
//         return `Your name is ${this.name}. Your age is ${this.age}. Your gender is ${this.gender}`
//     }
// }
// const Ziyoda = new Woman({
//     name: "Ziyoda",
//     age: 20,

// })
// console.log(Ziyoda.info());
//     images = document.querySelectorAll('.img');
// div.addEventListener('mousemove', (e) => {
//     images.forEach(el => {
//         let speed = el.getAttribute('data-speed')
//         let x = (window.innerWidth - e.pageX * speed) / 20
//         let y = (window.innerHeight - e.pageY * speed) / 10
//         el.style.transform = ` translate(${x}px , ${y}px)`
//     });
// })  