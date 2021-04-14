import { combineReducers } from 'redux';


//CURRENT SPECIAL
const currentSpecial = (state ={
    specialType: 'Half Off Cover',
    startTime: null,
    endTime: null
}, action)=> {
switch(action.type){
case 'SET_SPECIAL':
  return state= {
    ...state, 
    specialType: action.payload.specialType,
    startTime: action.payload.startTime,
    endTime: action.payload.endTime

  };
  case 'CLEAR_SPECIAL': return state={
    specialType: null,
    startTime: null,
    endTime: null
  }
default: return state
}
}

//USERS
const users = (state=
{
currentUser: {
  username: 'AJ',
  password: '123',
  loggedIn: false,
  waitList: true,
  id: 1,
  admin: true
},
userList: [
  {
    username: 'AJ',
    password: '123',
    loggedIn: false,
    waitList: true,
    id: 1
  },
  {
    username: 'Joe',
    password: '123',
    loggedIn: false,
    waitList: false,
    id: 1
  }
],
waitList: [
  {
    username: 'AJ',
    password: '123',
    loggedIn: false,
    waitList: true,
    id: 1
  }
]
}
, 

action)=> {
switch(action.type){

//-----------LOGIN-----------
case 'LOGIN':
  //copy users array
  const usersArray = state
  //search users array for a user with username === to action.payload.usernameInputValue
  const userObject = state.filter(user=> user.username === action.payload.usernameInputValue)[0];
  //if the username exists...
  if (userObject){
    //find the userIndex of current user
  const findUserIndex = () => {
    for(let i=0; i<state.length; i++) {
    if (state[i].username === action.payload.usernameInputValue) {
      return i
    }
  }
}
  const currentUserIndex = findUserIndex()
  if (userObject.password === action.payload.passwordInputValue) {
   //if so, change loggedIn of userobject to true
  userObject.loggedIn = true
  //remove initial userobject from copy of state
  usersArray.splice(currentUserIndex, 1);
  //add newUserObject to usersArray
  usersArray.push(userObject)
 }
  }
  //check if userobject.username and username.password are equal
 return usersArray;

 //---------Sign Up---------
case 'SIGN_UP':
      const newUser = {
        username: action.payload.newUserUsername,
        password: action.payload.newUserPassword,
        loggedIn: true,
        waitList: true,
      }
      //concat payload to state
      return {
        ...state,
        currentUser: newUser,
        userList: state.userList.concat(newUser) 
      }
 //-------------WaitList------------


  case 'ADD_WAIT_USER':
  //copy waitList
  console.log(state.waitList)
  const addWaitArray = [...state.waitList];
  addWaitArray.push(action.payload)
  return {
    ...state,
    waitList: addWaitArray
  }

  case 'REMOVE_WAIT_USER':
  const removeWaitArray = [...state.waitList];
  //find index of user
  const findRemoveWaitIndex = () => {
    for(let i=0; i<state.waitList.length; i++) {
    if (state.waitList[i].username === action.payload.username) {
      return i
    }
  }
}

const removeWaitIndex = findRemoveWaitIndex();
removeWaitArray.splice(removeWaitArray, 1)
  console.log(removeWaitArray)

    return {
      ...state,
      waitList: [...removeWaitArray]

    };

 default: return state
}
}



export const rootReducer = combineReducers({users, currentSpecial})