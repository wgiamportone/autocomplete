/* eslint-disable no-new */
import Autocomplete from './Autocomplete';
import usStates from './us-states';

import './main.css';

// US States
const data = usStates.map(state => ({
  text: state.name,
  value: state.abbreviation,
}));
new Autocomplete(document.getElementById('state'), {
  data,
  onSelect: (stateCode, state, input) => {
    console.log('selected state:', stateCode);
    input.value = state;
  },
});

new Autocomplete(document.getElementById('gh-user'), {
  url: 'https://api.github.com/search/users?q=',
  onSelect: (userId, userName, input) => {
    console.log('selected github user id:', userId);
    input.value = userName;
  },
});
