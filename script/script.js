document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide', {
        perPage: 2,
        gap: "2rem",
        padding: "3rem",
        type: "loop",
        perMove: 1,
    })
    splide.mount();
});