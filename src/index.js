import './styles.css'
import imageList from './tamplates/image-List.hbs';
import ApiServiseImg from './apiService';

const galleryList = document.querySelector ('.gallery');
const inputSearch = document.querySelector('.search-form');
const LoadMore = document.querySelector('.loadMore');
const findImg = document.querySelector('.found')

const apiServiseImg = new ApiServiseImg();

findImg.addEventListener('click', onSearch)
LoadMore.addEventListener('click',OnloadMore)//OnloadMore
inputSearch.addEventListener('submit', onSearch)

function onSearch(e) {
    e.preventDefault();
    onClearMarkup
    apiServiseImg.query = e.currentTarget.elements.query.value
    apiServiseImg.resetPage();
    onClearMarkup();
    fetchImages();
    LoadMore.disabled = false;
}

function fetchImages() {
apiServiseImg.fetchImages().then(responce => {
    appendImages(responce);
    })
    .catch(error=>console.error(error));
}

function appendImages(responce) {
    galleryList.insertAdjacentHTML('beforeend', imageList(responce))
}
function OnloadMore(){
    apiServiseImg.fetchImages().then(appendImages)
    
   setTimeout(handleButtonClick,500)
}

function onClearMarkup () {
    galleryList.innerHTML = '';
}


function handleButtonClick(){
    const element = galleryList.lastElementChild;
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
})
}