import {all, call, spawn} from 'redux-saga/effects'


export function* rootSaga(){
    const sagas: any[] = [
    ]
    yield all(
        sagas.map(saga => 
            spawn(function*(){
                while(true){
                    try{
                        yield call(saga);
                        break;
                    } catch(e){
                        
                    }
                }
            })
            
        )
    )
}