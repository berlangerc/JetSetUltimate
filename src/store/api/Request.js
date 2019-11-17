import localStorage from './../../utils/localStorage';


export default class Request {


    /***************** POST **************/
    static post(url, data) {

        var myPost = {
            method: 'POST',
            headers: Request.getHeaders(),
            body: JSON.stringify(data)
        };

        return Request.fetch(url, myPost)
    }

    static authPost(url, data) {
        var myPost = {
            method: 'POST',
            headers: Request.getAuthHeaders(),
            body: JSON.stringify(data)
        };

        return Request.fetch(url, myPost);
    }

    /***************** GET **************/
    static get(url) {

        var myGet = {
            method: 'GET',
            headers: Request.getHeaders()
        };

        return Request.fetch(url, myGet);
    }

    static fetch(url, fetchObject) {

        return fetch(url, fetchObject)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => {
                if (response.status === 204) {
                    return null;
                }
                else {
                    return response.json();
                }
            })
    }

    static authGet(url) {

        var myGet = {
            method: 'GET',
            headers: Request.getAuthHeaders()
        };

        return fetch(url, myGet);
    }

    /***************** HEADERS **************/
    static getAuthHeaders = () => {
        var token = localStorage.getToken();
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        }
    }

    static getHeaders = () => {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
}