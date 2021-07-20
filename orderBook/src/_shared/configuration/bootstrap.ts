import configureStore from "../store/configureStore"

export default function bootstrap(){
    const store = configureStore();
    return store;

}
