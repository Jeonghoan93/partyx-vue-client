import {
  fetchUserProfile,
  updateUserProfile,
  fetchFavorites,
} from 'src/api/services/user';
import { User } from 'src/types/user';
import { Event } from 'src/types/event';
import { Commit } from 'vuex';

interface UserState {
  userProfile: User | null;
  favorites: Event[];
}

const mutations = {
  setUserProfile(state: UserState, payload: User) {
    state.userProfile = payload;
  },
  setFavorites(state: UserState, payload: Event[]) {
    state.favorites = payload;
  },
};

const actions = {
  async fetchUserProfile({ commit }: { commit: Commit }, userId: string) {
    try {
      const userProfile = await fetchUserProfile(userId);
      commit('setUserProfile', userProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Handle error accordingly, e.g. show a notification or something similar
    }
  },
  async updateUserProfile(
    { commit }: { commit: Commit },
    { userId, data }: { userId: string; data: Commit }
  ) {
    try {
      const updatedProfile = await updateUserProfile(userId, data);
      commit('setUserProfile', updatedProfile);
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Handle error accordingly
    }
  },
  async fetchFavorites({ commit }: { commit: Commit }, userId: string) {
    try {
      const response = await fetchFavorites(userId);
      commit('setFavorites', response.events);
    } catch (error) {
      console.error('Error fetching user favorites:', error);
    }
  },
};

const getters = {
  userProfile: (state: UserState) => state.userProfile,
  favorites: (state: UserState) => state.favorites,
};

const state: UserState = {
  userProfile: null,
  favorites: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
