// export function getPriyankaAmount() {
//   return { type: "PRIYANKA" };
// }

// export function getMuraliAmount() {
//   return { type: "MURALI" };
// }

export function deleteUserAction(payLoad) {
  return {
    type: "DELETE_USER",
    payLoad,
  };
}

export function addUserAction(payLoad) {
  return {
    type: "ADD_USER",
    payLoad,
  };
}

export function updateUserAction(payLoad) {
  return {
    type: "UPDATE_USER",
    payLoad,
  };
}
