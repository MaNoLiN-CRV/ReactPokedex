export default class Config {

    BASE_URL: string;
    API_KEY : string;

    constructor(base_url:string, api_key:string) {
        this.BASE_URL = base_url;
        this.API_KEY = api_key;
    }

}