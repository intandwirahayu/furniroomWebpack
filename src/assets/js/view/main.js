import DataSource from '../dataArticles/data-source.js';
import '../allComponent/list-product.js';
import '../allComponent/list-news.js';

const main = () => {
    //product
    const contentProduct = async () => {
        try{
            const resultProduct = await DataSource.dataSourceProduct();
            renderResultProduct(resultProduct);
        }catch(message){
            fallbackResultProduct(message);
        }
    };

    const renderResultProduct = (resultProduct) => {
        const listProduct = document.querySelector('list-product');
        listProduct.dataProducts = resultProduct;
    };

    const fallbackResultProduct = (message) => {
        console.log(message);
    }

    contentProduct();
    

    //news
    const contentNews = async () => {
        try{
            const resultNews = await DataSource.dataSourceNews();
            renderResultNews(resultNews); 
        }catch(message){
            fallbackResultNews(message);
        }
    };

    const renderResultNews = (resultNews) => {
        const listNews = document.querySelector('list-news');
        listNews.dataNews = resultNews;
    };

    const fallbackResultNews = (message) => {
        console.log(message);
    };

    contentNews();
};

export default main;