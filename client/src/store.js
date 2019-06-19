import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: [
      {
        id: 1,
        title: 'Born to Bark',
        author: 'Stanley Coren',
        main_idea: 'Coren goes into historical detail explaining to his wife, Joan, that "terriers are bred to bark.'
      },
      {
        id: 2,
        title: 'How Dogs Love Us',
        author: 'Gregory Berns',
        main_idea: 'Neuroscientist Gregory Berns is on a quest: to find out if his dogs truly feel love.'
      }
    ],
    songsList: [
      {
        id: 3,
        title: 'Sweet Like Honey Suckle',
        artist: 'An-ten-nae'
      },
      {
        id: 4,
        title: 'Focused',
        artist: 'CloZee'
      }
    ],
    dogs: "img/dog-logo.6e13b6c4.png"
  },

  getters: {
    books: (state) => {
      return state.booksList
    },
    songs: (state) => {
      return state.songsList
    },
    dogs: (state) => {
      return state.dogs
    }
  },

  mutations: {
    'SET_DOGS' (state, dogs) {
      state.dogs = dogs;
    }
  },

  actions: {
    loadDogs ({ commit }) {
      axios
        .get('http://127.0.0.1:3000/dogs')
        .then(res => res.data)
        .then(dogs => {
          commit('SET_DOGS', dogs)
        })
        .catch((e)=> {
          console.error(e) // eslint-disable-line no-console
        })
    }
  }
})
