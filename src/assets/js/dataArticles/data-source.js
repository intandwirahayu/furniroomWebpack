import dataProducts from './product.js';
import dataNews from './news.js';

class DataSource{
    static dataSourceProduct(){
        return new Promise((resolve, reject) => {
            if(dataProducts.length > 0){
                resolve(dataProducts);
            }else{
                reject("no data products");
            }
        })
    }

    static dataSourceNews(){
        return new Promise((resolve, reject) => {
            if(dataNews.length > 0){
                resolve(dataNews);
            }else{
                reject("no data news");
            }
        });
    }
}

export default DataSource;