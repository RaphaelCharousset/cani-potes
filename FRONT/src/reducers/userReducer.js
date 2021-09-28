/* eslint-disable linebreak-style */
import { LOGIN__USER, LOGOUT__USER } from '../actions/users';
import { CONNECT__USER } from './../actions/users';
import { FAILED__TO__CONNECT } from './../actions/users';

const userInitialState = {
  id: 1,
  first_name: 'Jean-Michel',
  last_name: 'Le Test',
  photo: '',
  position: [43.5606, 4.085],
  dogs: [
    {
      dog_id: 101,
      dog_photo: "img12.jpg",
      dog_surname: "Riri",
      dog_photo_id: 9,
    },
    {
      dog_id: 102,
      dog_photo: "img14.jpg",
      dog_surname: "Fifi",
      dog_photo_id: 11,
    },
  ],
  token: '',
  isLogged: false,
  failedToConnect: false,
};

const userReducer = (state = userInitialState, action = {}) => {
  switch (action.type) {
    case CONNECT__USER:
      return {
        ...state,
        token: action.token,
        isLogged: true,
      };
    case FAILED__TO__CONNECT:
      return {
        ...state,
        failedToConnect: true,
      };
    case LOGOUT__USER:
      return {
        ...userInitialState,
      };
    default:
      return state;
  }
};

export default userReducer;
