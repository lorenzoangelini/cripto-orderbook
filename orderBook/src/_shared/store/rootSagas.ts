import {all, call, spawn} from 'redux-saga/effects'
import {rootSaga as orderBookSaga} from '../../orderBook'

export function* rootSaga(){
    const sagas: any[] = [
        orderBookSaga,
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