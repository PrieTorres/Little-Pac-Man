type User = {
  userName: string,
  passaword: string
}

type verifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
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
  passaword: "123",
  perms: [
    { a1: "blablavla" }
  ]
};

const logged = verifyUser(user1, user1sv);//ele confere os tipos dos valores passados mas user1 e user1sv não possuem tipo, o typescript confere as restrições
//n tem problema os parametros possuirem chaves a mais, é conferido o necessário e o tipo do necessário
console.log(logged)

