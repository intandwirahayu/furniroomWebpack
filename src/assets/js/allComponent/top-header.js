class TopHeader extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h2>Furniroom</h2>
            <div id="menu">
                <img src="src/assets/images/icon_menu.svg">
            </div>
            <nav id="drop_menu">
                <ul id="list_menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#collections">Collections</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#promo" >Promo</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#bio">Bio</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('top-header', TopHeader);