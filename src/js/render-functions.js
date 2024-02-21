import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let galleryImage = null;

export async function renderImages(images, task) {
    let gallery = document.querySelector(".image-gallery");
    let cardHTML = ``;
    
    const loadingIndicator = document.querySelector(".container-loader");
    loadingIndicator.style.display = 'block';
    
    const buttonLoad = document.querySelector(".load-button");

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    images.forEach(image => {
        cardHTML += `
            <li class="image-card">
                <a class="gallery-link" href="${image.webformatURL}">
                    <img class="img-example" src="${image.webformatURL}" alt="${image.tags}"></img>
                </a>

                    <div class="tumb">
                        <ul class="box-info">
                            <li>
                                <p>Likes</p>
                                <p>${image.likes}</p>
                            </li>
                            <li>
                                <p>Views</p>
                                <p>${image.views}</p>
                            </li>
                            <li>
                                <p>Comments</p>
                                <p>${image.comments}</p>
                            </li>
                            <li>
                                <p>Downloads</p>
                                <p>${image.downloads}</p>
                            </li>
                        </ul>
                    </div>
            </li>
        `;
    });
    
    gallery.insertAdjacentHTML("beforeend", cardHTML);
    
    loadingIndicator.style.display = 'none';
    buttonLoad.style.display = 'block';

    if (galleryImage) {
        galleryImage.destroy();
    }

    galleryImage = new SimpleLightbox('.gallery-link', {
      captionType: 'attr', 
      captionsData: 'alt',
      captionDelay: 250,
    });
    galleryImage.refresh();

    if (task)
    {
        const imageCardHeight = document.querySelector('.image-card').getBoundingClientRect().height * 2;
        
        window.scrollBy({
            top: imageCardHeight,
            behavior: "smooth",
        });
    }
}