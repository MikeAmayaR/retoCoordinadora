import axios from 'axios';

class serviceChallenge {
    static async getChallenge() {
        let response = null;
        let request = {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            url: "https://api.coordinadora.com/cm-model-testing/api/v1/talentos/",
            json: true
        };
        try {
            response = getDataIdAxios(request);
        } catch (error) {
            console.log(error);
        }
        return response;
    }
    static async getChallengeTracking() {
        let response = null;
        let request = {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            url: "https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint",
            json: true
        };
        try {
            response = getDataIdAxios(request);
        } catch (error) {
            console.log(error);
        }
        return response;
    }
}
async function getDataIdAxios(request) {
    try {
        let instances = await axios({
            method: request.method,
            url: request.url,
            data: request.data,
            headers: request.headers,
            json: true
        })
        return instances;
    } catch (error) {
        console.log(error);
    }
}
export default serviceChallenge;