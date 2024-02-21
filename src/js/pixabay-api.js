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
let searchQuery;
let currentPage = 1;
let amountImages;
let sumPage = 0;


formForSearching.addEventListener("submit", (e) => {
    e.preventDefault();

    searchQuery = inputSearch.value.trim();
    inputSearch.value = '';

    if (!searchQuery) {
        iziToast.error({
            title: "Error",
            message: "Please enter a keyword for search",
        });
        return;
    }
    
    gallery.innerHTML = '';
    buttonLoad.style.display = 'none';

    searchParams = new URLSearchParams({
        key: "42360153-ab2745711a491af6a9cf29268",
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 15,
    });

    amountImages = searchParams.get("per_page");

    axios.get(`https://pixabay.com/api/?${searchParams.toString()}`)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error("Failed to fetch images");
            }
            return response.data;
        })
        .then(data => {
            if (data.hits.length === 0) {
                throw new Error("No images found");
            }
            renderImages(data.hits, 0);
            sumPage += 1;
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: error.message,
            });
        });
});

buttonLoad.addEventListener("click", (e) => {
    e.preventDefault();
    
    buttonLoad.style.display = 'none';
    loadingIndicator.style.display = 'block';

    currentPage++;
    searchParams.set('page', currentPage);

    axios.get(`https://pixabay.com/api/?${searchParams.toString()}`)
        .then(response => { 
            if (response.data.totalHits <= amountImages * sumPage) {
                loadingIndicator.style.display = 'none';
                throw new Error("We're sorry, but you've reached the end of search results.");
            }
            return response.data;
        })
        .then(data => {
            renderImages(data.hits, 1);
            sumPage += 1;
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: error.message,
            });
        });
});