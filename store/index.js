import axios from 'axios'
import Vuex from 'vuex'
import Cookie from "js-cookie";

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null,
            admin: [],
            loadedPosts: [],
            loadedInformasi: [],
            uid: "",
        },
        mutations: {

            setUid(state, uid) {
                state.uid = uid;
            },
            setAdmin(state, admin) {
                state.admin = admin;
            },
            addAdmin(state, admindata) {
                state.admin.push(admindata);
            },
            addPosts(state, post) {
                state.loadedPosts.push(post);
            },
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            setInformasi(state, posts) {
                state.loadedInformasi = posts;
            },
            setToken(state, token) {
                state.token = token;
            },
            clearToken(state) {
                state.token = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.all([
                    axios.get(process.env.baseUrl + "/DataArtikel.json")
                        .then(res => {
                            const postsArray = []
                            for (const key in res.data) {
                                postsArray.push({ ...res.data[key], id: key })
                            }
                            vuexContext.commit('setPosts', postsArray)
                        })
                        .catch(e => context.error(e)),
                    axios.get(process.env.baseUrl + "/DataInformasi.json")
                        .then(res => {
                            const postsArray = []
                            for (const key in res.data) {
                                postsArray.push({ ...res.data[key], id: key })
                            }
                            vuexContext.commit('setInformasi', postsArray)
                        })
                        .catch(e => context.error(e)),
                ])
            },

            daftarAdmin(vuexContext, authData) {
                return axios.all([

                    axios.post(
                        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
                        process.env.fbApi,
                        {
                            email: authData.email,
                            password: authData.password,
                            returnSecureToken: true,
                        }
                    )
                        .then((result) => {
                            axios.put(process.env.baseUrl + "/DataAdmin/" + result.data.localId + ".json", authData).then((r) => {
                                console.log(result.data.localId);
                                vuexContext.commit('addAdmin', authData)
                            }).catch((e) => console.log(e));

                        }).catch((e) => console.log(e))

                ])

            },
            addPosts(vuexContext, post) {

                return axios.all([
                    axios
                        .post(
                            process.env.baseUrl + "/DataArtikel.json",
                            post
                        )
                        .then((result) =>
                            vuexContext.commit('addPosts', { ...post, id: result.data.name })

                        )
                        .catch((e) => console.log(e)),
                ])

            },
            authAdmin(vuexContext, authData) {
                return axios
                    .post(
                        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
                        process.env.fbApi,
                        {
                            email: authData.email,
                            password: authData.password,
                            returnSecureToken: true,
                        }
                    )
                    .then((result) => {
                        vuexContext.commit('setToken', result.data.idToken);
                        vuexContext.commit('setUid', result.data.localId);
                        localStorage.setItem("token", result.data.idToken);
                        localStorage.setItem("uid", result.data.localId);
                        localStorage.setItem(
                            "tokenExpiration",
                            new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000
                        );
                        Cookie.set("jwt", result.data.idToken);
                        Cookie.set("uid", result.data.localId);
                        Cookie.set(
                            "expirationDate",
                            new Date().getTime() + Number.parseInt(result.data.expiresIn) * 1000
                        );

                    })
                    .catch((e) => console.log(e));
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("jwt="));
                    if (!jwtCookie) {
                        return;
                    }
                    token = jwtCookie.split("=")[1];
                    expirationDate = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("expirationDate="))
                        .split("=")[1];
                } else {
                    token = localStorage.getItem("token");
                    expirationDate = localStorage.getItem("tokenExpiration");
                }
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log("No token or invalid token");
                    vuexContext.dispatch("logout");
                    return;
                }
                vuexContext.commit("setToken", token);


            },
            logout(vuexContext) {
                vuexContext.commit("clearToken");
                Cookie.remove("jwt");
                Cookie.remove("uid");
                Cookie.remove("expirationDate");
                Cookie.remove("nama");
                if (process.client) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("tokenExpiration");
                    localStorage.removeItem("uid");
                }
            },

        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            loadedInformasi(state) {
                return state.loadedInformasi;
            },
            isAuth(state) {
                return state.token != null;
            },
            getToken(state) {
                return state.token;
            },
            getUid(state) {
                return state.uid;
            },
            loadedAdmin(state) {
                return state.admin;
            }
        }
    });
}

export default createStore;