import './item-news.js';

class ListNews extends HTMLElement{
    set dataNews(dataNews){
        this._dataNews = dataNews;
        this.render();
    }

    render(){
        this._dataNews.forEach((dataItemNews) => {
            const itemNews = document.createElement('item-news');
            itemNews.dataItemNews = dataItemNews;
            this.appendChild(itemNews);
        });
    }
}

customElements.define('list-news', ListNews);