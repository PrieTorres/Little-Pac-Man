type User = {
  userName: string,
  passaword: string
}

type verifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: verifyUserFn = (user, sentValue) => {
  return(
    user.userName === sentValue.userName &&
    user.passaword === sentValue.passaword
  )
}

const user1 = {
  userName: "user1",
  passaword: "123"
};
const user1sv = {
  userName: "user1",
  passaword: "123"
};

const logged = verifyUser(user1, user1sv);
console.log(logged)

