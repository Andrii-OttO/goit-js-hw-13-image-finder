
// https://pixabay.com/api/?key=24004860-c21d58e76a4e8237e513891cd&q=yellow+flowers&image_type=photo
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
export default class apiImage{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

async fetchImages(){
    const BASE_URL= 'https://pixabay.com/api/'
    const KEY = '24004860-c21d58e76a4e8237e513891cd'
    const url=`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`
    return await fetch(url)
    .then(response=>response.json())
    .then(({hits}) => {
        this.page += 1;
        return hits;
      })
    // .cach(error=>{console.log(error);})
}
resetPage() {
    this.page = 1;
  }
get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

}