const image = ["images/image-1.jpg",
    "images/image-2.jpg",
    "images/image-3.jpg",
    "images/image-4.jpg",
    "images/image-5.jpg",
    "images/image-6.jpg",
    "images/image-7.jpg",
    "images/image-8.jpg",
];

let index = 0;
const slider = document.getElementById("image-show");
setInterval(() => {
    if (index === image.length) {
        index = 0
    }
    slider.setAttribute('src', image[index])
    // console.log(image[index])
    index++;
}, 1000)

