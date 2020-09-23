const defaultState = [
  {
    id: 10048,
    email: "MVicari@pretium.ly",
    username: "WMatthews",
    password: "aABRq",
  },
  {
    id: 10049,
    email: "MVelasco@adipiscing.gov",
    username: "HWallace",
    password: "MQBcC",
  },
  {
    id: 10050,
    email: "TWomen@vestibulum.org",
    username: "WElshoff",
    password: "T9IpL",
  },
];

function rootReducer(state = { users: defaultState }, action) {
  switch (action.type) {
    case "ADD_USER":
      var users = [...state.users, action.payLoad];
      return { users };

    case "DELETE_USER":
      var users = state.users.filter((user) => {
        return user.id !== action.payLoad.id;
      });

      return { users };

    case "UPDATE_USER":
      var users = [...state.users];
      users[action.payLoad.index] = action.payLoad;
      return { users };

      break;
    default:
      return state;
  }
}

export default rootReducer;

// switch (action.type) {
//   case "PRIYANKA":
//     return { ...state, Pamount: 20000 };
//     break;

//   case "MURALI":
//     return { ...state, Mamount: 25000 };
//     break;

//   default:
//     return { amount: 0 };
// }
