class CollectionPrimary extends HTMLElement{
    connectedCallback(){
        this.src = this.getAttribute('src') || null;
        this.headingTop = this.getAttribute('headingTop') || null;
        this.headingBottom = this.getAttribute('headingBottom') || null;
        this.totalItem = this.getAttribute('totalItem') || null;
        this.render();
    }

    render(){
        this.innerHTML = `
                <figure>
                    <img src="${this.src}">
                </figure>
                
                <div class="detail-item-primary">
                    <h3>${this.headingTop}<br>${this.headingBottom}</h3>
                    <p>${this.totalItem} items</p>
                    <a href="#">Read More <span><img src="src/assets/images/arrow-right.svg"></span></a>
                </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue){
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes(){
        return ['src', 'headingTop', 'headingBottom', 'totalItem'];
    }
}

customElements.define('item-collection-primary', CollectionPrimary);
