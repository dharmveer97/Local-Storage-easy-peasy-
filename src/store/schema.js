/* eslint no-param-reassign: "off" */

import { action } from 'easy-peasy';

const schema = {
  isLoggedIn: {
    value: false,
    toggle: action((state, payload) => {
      state.value = payload;
    }),
  },
  user: {
    data: {},
    location: {
      city: 'Toronto',
      country: 'Canada',
      countryCode: 'CA',
      region: 'North',
      currency: '$',
    },
    update: action((state, payload) => {
      state.data = payload;
    }),
    updateLocation: action((state, payload) => {
      state.location = payload;
    }),
  },
  cart: {
    items: [],
    add: action((state, payload) => {
      state.items.push(payload);
    }),
    update: action((state, payload) => {
      let item = state.items[payload.index];
      item = payload.data;
      state.items[payload.index] = item;
    }),
    remove: action((state, payload) => {
      state.items.splice(payload, 1);
    }),
    empty: action((state) => {
      state.items = [];
    }),
  },
};

export default schema;
