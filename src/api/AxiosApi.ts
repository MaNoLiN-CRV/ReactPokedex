import HttpActions from "./HttpActions";
import { TopLevel } from "./response/PokemonResponse";

export default class AxiosApi extends HttpActions {
    
    getPokemons(): Promise<TopLevel> {
        
    }

}