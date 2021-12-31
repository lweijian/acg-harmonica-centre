import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [persistedState()],
    state: {
        token: "",
        accessToken:"",
        refreshToken:"",
        isLogin:false,
        userName: "",
        signature: "",
        roleName:"",
        inputSearch:"",
        isLoading:false
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        setRefreshToken(state, refreshToken) {
            state.refreshToken = refreshToken;
        },
        setIsLogin(state,isLogin){
            state.isLogin=isLogin;
        },
        setUsername(state,username){
            state.userName=username;
        },
        setSignature(state,signature){
            state.signature=signature;
        },
        setRoleName(state,roleName){
            state.roleName=roleName;
        },
        setInputSearch(state,inputSearch){
            state.inputSearch=inputSearch
        },
        setIsLoading(state,isLoading){
            state.isLogin=isLoading;
        },

    },
    actions: {
    },
    modules: {}
})
