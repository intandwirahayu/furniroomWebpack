class ItemCollection extends HTMLElement{
    connectedCallback(){
        this.heading = this.getAttribute('heading') || null;
        this.src = this.getAttribute('src') || null;
        this.totalItem = this.getAttribute('totalItem') || null;
        this.render(); 
    }

    render(){
        this.innerHTML = `
            <h3>${this.heading}</h3>

            <figure>
                <img src="${this.src}">
            </figure>

            <a href="#">${this.totalItem} items <span><img src="src/assets/images/arrow-right.svg"></span></a>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue){
        this[name] = newValue;
        this.render();
    }

    static get observedAttribute(){
        return ['heading', 'src', 'totalItem'];
    }
}

customElements.define('item-collection', ItemCollection);

console.log('masuk');