import Axios from "axios";

class RestClient {

    static getRequest(url) {
        return Axios.get(url)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return null;
            });
    }

    static postRequest(postUrl, jsonData) {

        const config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded ' }
        };
        
        return Axios.post(postUrl, jsonData, config)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return null;
            });
    }

}

export default RestClient;