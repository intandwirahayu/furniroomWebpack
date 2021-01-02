class BottomHeader extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <h1>The Simplest <br> Furnitures Room</h1>
            <p>best design of all furniture collections and will <br> enhance the nuances of the room</p>
            <div id="button-signup">
                <a href="#">SIGN UP NOW</a>
            </div>
        `;
    }
}

customElements.define('bottom-header', BottomHeader);