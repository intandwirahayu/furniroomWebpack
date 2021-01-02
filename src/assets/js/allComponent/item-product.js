class ItemProduct extends HTMLElement{
    set dataItemProduct(dataItemProduct){
        this._dataItemProduct = dataItemProduct;
        this.render();
    }

    render(){
        this.innerHTML = `
            <figure>
                <img src="${this._dataItemProduct.src}">

                <div class="new">
                    <p>New</p>
                </div>

                <div class="hover-shopping">
                    <a href="#"><img src="src/assets/images/shopping-bag.svg"></a>
                </div>
            </figure>

            <h3>${this._dataItemProduct.nameProduct}</h3>
            <p>Rp. ${this._dataItemProduct.price}</p>
        `;
    }
}

customElements.define('item-product', ItemProduct);