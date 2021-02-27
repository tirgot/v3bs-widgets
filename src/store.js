import {createStore} from 'vuex';

export const store = createStore({
    state(){
        return {
            isLoading: false,
            errMsgs: [],        // ele format: {code: 0, message: '', detail: ''}
        }

    },
    mutations: {
        setLoading(state, bolVal){
            state.isLoading = bolVal;
        },
        setErrMsg(state, errMsg=null){
            if(errMsg == null){
                state.errMsgs = [];
                return
            }

            let d = new Date()
            errMsg.id = + d;

            state.errMsgs.push(errMsg);
        },
        popErrMsg(state){
            return state.errMsgs.pop()
        }
    }
})
