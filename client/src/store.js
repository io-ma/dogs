import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    booksList: [
      {
        id: 1,
        title: 'Les Fleurs du Mal',
        author: 'Charles Baudelaire',
        main_idea: 'We truely get to know the world surrounding us if we accept the existence of both good and evil.'
      },
      {
        id: 2,
        title: 'The Hidden Life of Trees: What They Feel, How They Communicate—Discoveries from A Secret World',
        author: 'Peter Wohlleben',
        main_idea: 'Trees are more complex that it was initially thought.'
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
    dogs: []
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
