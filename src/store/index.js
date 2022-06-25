import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
import user from './modules/user'


const state = createPersistedState({
  key: 'app-user',
  paths: ['user.authenticated'],
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
    removeItem: key => Cookies.remove(key),
  },
});

export default createStore({

  modules: {
    user,
  },
  plugins: [state]
})

