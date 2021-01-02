class AuthorFooter extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <p>Made with</p>
            <img src="src/assets/images/icon-love.svg">
            <p>by Intan 2020</p>
        `;
    }
}

customElements.define('author-footer', AuthorFooter);