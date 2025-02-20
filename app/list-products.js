import './list-products.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";
import hats from "./assets/images/hats.jpg";
import chairs from "./assets/images/chairs.jpg";
import shoes from "./assets/images/shoes.jpg";
import perfume2 from "./assets/images/perfume2.jpg";
import moisture from "./assets/images/moisture.jpg";
import perfume from "./assets/images/perfume.jpg";
import makeup from "./assets/images/makeup.jpg";
import gel from "./assets/images/gel.jpg";
import camera from "./assets/images/camera.jpg";



document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Fujfilm Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: enginakyurt
        },
        {
            name: 'Canon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: quangVietNguyen
        },
        {
            name: 'Nikon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini
        },
        {
            name: "Stylish Hat",
            description: "A trendy hat to complement your outfit.",
            image: hats
        },
        {
            name: "Wooden Chair",
            description: "Elegant and comfortable wooden chair.",
            image: chairs
        },
        {
            name: "Running Shoes",
            description: "Lightweight and comfortable running shoes.",
            image: shoes
        },
        {
            name: "Luxury Perfume",
            description: "A fragrance that makes a statement.",
            image: perfume2
        },
        {
            name: "Moisturizing Cream",
            description: "Keeps your skin soft and smooth.",
            image: moisture
        },
        {
            name: "Elegant Perfume",
            description: "A unique blend of aromatic notes.",
            image: perfume
        },
        {
            name: "Makeup Kit",
            description: "All-in-one makeup essentials.",
            image: makeup
        },
        {
            name: "Hair Styling Gel",
            description: "Keep your hair stylish all day.",
            image: gel
        },
        {
            name: "Professional Camera",
            description: "Capture stunning moments.",
            image: camera
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});