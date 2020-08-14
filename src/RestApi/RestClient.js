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

}

export default RestClient;