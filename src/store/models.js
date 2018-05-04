import axios from 'axios';

export const poems = {
  state: {
    poems: [],
    editing: false,
  },
  reducers: {
    setPoems(state, payload) {
      return {
        ...state,
        poems: payload,
      };
    },
    setViewType(state, payload) {
      return {
        ...state,
        type: payload,
        editing: false
      };
    },
    editingToggle(state) {
      return {
        ...state,
        editing: !state.editing
      };
    },
    addPoem(state, poem) {
      return {
        ...state,
        editing: false,
        poems: [...state.poems, poem]
      };
    }
  },
  effects: {
    async postPoem(poem, state) {
      await axios.post('/poems.json', poem);
      this.addPoem(poem);
    }
  }
};