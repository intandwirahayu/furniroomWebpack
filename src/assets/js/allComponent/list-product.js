import './item-product.js';

class ListProduct extends HTMLElement{
    set dataProducts(dataProducts){
        this._dataProducts = dataProducts;
        this.render();
    }

    render(){
        this._dataProducts.forEach((dataItemProduct) => {
            const itemProduct = document.createElement('item-product');
            itemProduct.dataItemProduct = dataItemProduct;
            this.appendChild(itemProduct);
        });
    }
}

customElements.define('list-product', ListProduct);