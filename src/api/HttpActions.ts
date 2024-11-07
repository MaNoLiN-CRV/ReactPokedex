import Config from "../config/Config";
import { TopLevel } from "./response/PokemonResponse";

export default abstract class HttpActions {

    config: Config;

    constructor(config:Config) {
        this.config = config;
    }

    abstract getPokemons() : Promise<TopLevel>;
}