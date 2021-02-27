import axios from "axios";

import { store } from "./store";

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFToken";

axios.interceptors.request.use(
    function (config){

        store.commit('setLoading', true)
        return config
    }
)

axios.interceptors.response.use(
    function (response){
        store.commit('setLoading', false)
        console.log("Success: [" + response.config.method + "] "+ response.config.url)
        return response
    },
    function (error){
        store.commit('setLoading', false)
        store.commit('setErrMsg', {code: 400, message:error.name, detail: error.config.method+"\n"+error.config.url+"\n"+error.message});
        console.log("Error: ["+ error.config.method + "] " + error.config.url + "(" + error.message + ")")
        return Promise.reject(error)
    }
)


export default {
    install: (app, store) => {
        app.config.globalProperties.$http = axios;
    }
}


/***
(function () {
    /**
     * Install plugin
     * @param app


    function plugin(app) {
        if (plugin.installed) {
            return;
        }

        if (!axios) {
            console.error('You have to install axios');
            return;
        }

        if (semver.valid(app.version) == null) {
            console.error('Unkown vue version');
            return;
        }

        plugin.installed = true;

        if (semver.lt(app.version, '3.0.0')) {
            Object.defineProperties(app.prototype, {

                axios: {
                    get: function get() {
                        return axios;
                    }
                },

                $http: {
                    get: function get() {
                        return axios;
                    }
                }

            });
        } else {
            app.config.globalProperties.axios = axios;
            app.config.globalProperties.$http = axios;
        }

        app.axios = axios;
        app.$http = axios;
    }

    if (typeof exports == "object") {
        module.exports = plugin;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return plugin });
    } else if (window.Vue && window.axios) {
        Vue.use(plugin, window.axios);
    }
})();***/