// const product = [
//     {
//         id: 1,
//         image: "https://olcha.uz/image/220x220/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg",
//         title: "Honor X7b 8/128 GB",
//         price: 2333000,
//         "monthly-payment": "389 000 сум x 6 мес",
//     },
//     {
//         id: 2,
//         image: "https://olcha.uz/image/220x220/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg",
//         title: "Honor X7b 8/128 GB",
//         price: 2333000,
//         "monthly-payment": "389 000 сум x 6 мес",
//     },
//     {
//         id: 3,
//         image: "https://olcha.uz/image/220x220/products/supplier/stores/1/2024-02-11/EVFl4kRDy647wlfqPL4BZ4UD38ZC5p39CqlKigmU31o8z6px36ays3j2OYoa.jpg",
//         title: "Honor X7b 8/128 GB",
//         price: 2333000,
//         "monthly-payment": "389 000 сум x 6 мес",
//     }

// ]

let elCard = document.querySelector(".card");

product.map((item) => {
    const {image, title, price} = item;
    elCard.innerHTML += `
        <h1>Title: ${title}</h1>
        <p>Price: ${price}$</p>
        <img src=${image} alt=${title}/>
    `
})


// let URL = "http://localhost:3000/category"

// fetch(URL).then((response) => {
//     return response.json();
// }).then((data) => {
//     // console.log(data);
//     data.map((item) => {
//         const {title, image} = item;
//          elCard.innerHTML += `
//                 <h1 class="card__title">Title: ${title}</h1>
//                 <img src=${image} alt=${title}/>
//             `
//         // console.log(item.title);
//     })
// })

