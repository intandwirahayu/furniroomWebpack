class ItemNews extends HTMLElement{
    set dataItemNews(dataItemNews){
        this._dataItemNews = dataItemNews;
        this.render();
    }

    render(){
        this.innerHTML = `
            <figure>
                <img src="${this._dataItemNews.src}" alt="">
            </figure>

            <article>
                <h3>${this._dataItemNews.headingTop} <br> ${this._dataItemNews.headingBottom}</h3>
                <p>${this._dataItemNews.articleNews}</p>
                <footer>
                    <div class="readMoreNews">
                        <a href="#">Read More</a>
                    </div>
                </footer>
            </article>
        `;
    }
}

customElements.define('item-news', ItemNews);