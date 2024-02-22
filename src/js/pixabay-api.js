import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";
import '../css/loader.css';
import { renderImages } from "./render-functions";


const formForSearching = document.querySelector(".form_images");
const inputSearch = document.querySelector(".input_searching");
const buttonLoad = document.querySelector(".load-button");
const loadingIndicator = document.querySelector(".container-loader");
const gallery = document.querySelector(".image-gallery");

let searchParams;
let currentPage = 1;
let sumPage = 0;


formForSearching.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!inputSearch.value.trim()) {
        iziToast.error({
            title: "Error",
            message: "Please enter a keyword for search",
        });
        return;
    }

    searchParams = new URLSearchParams({
        key: "42360153-ab2745711a491af6a9cf29268",
        q: inputSearch.value.trim(),
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 15,
    });

    inputSearch.value = '';    
    gallery.innerHTML = '';
    buttonLoad.style.display = 'none';

    try {
        const response = await axios.get(`https://pixabay.com/api/?${searchParams.toString()}`);
        if (response.status < 200 || response.status >= 300) {
            throw new Error("Failed to fetch images");
        }
        const data = response.data;
        if (data.hits.length === 0) {
            throw new Error("No images found");
        }
        renderImages(data.hits);
        sumPage = 1;
        currentPage = 1;
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message,
        });
    }
});

buttonLoad.addEventListener("click", async (e) => {
    e.preventDefault();
    
    buttonLoad.style.display = 'none';
    loadingIndicator.style.display = 'block';

    currentPage++;
    searchParams.set('page', currentPage);

    try {
        const response = await axios.get(`https://pixabay.com/api/?${searchParams.toString()}`);
        
        if (response.data.totalHits <= searchParams.get("per_page") * sumPage) {
            loadingIndicator.style.display = 'none';
            throw new Error("We're sorry, but you've reached the end of search results.");
        }
            
        const data = response.data;
        // Ассинхронно вызывает функцию чтобы страница прокрутилась после загрузки новых карточек
        await renderImages(data.hits);

        const imageCardHeight = document.querySelector('.image-card').getBoundingClientRect().height * 2;
        
        window.scrollBy({
            top: imageCardHeight,
            behavior: "smooth",
        });

        sumPage += 1;
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: error.message,
        });
    }
});