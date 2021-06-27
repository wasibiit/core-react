export const signInQuery = (email, password) => {
    return `mutation {
  userSignin(
    input: {
      email: "${email}",
      password: "${password}"
    }
  )
  {
    firstName,
    lastName,
    dob,
    email,
    role {
      id
    },
    token
  }
}`
}

export const getCurrentUserQuery = (token) => {
    return `mutation {
  getUserFromJwt(
    input: {
      token: "${token}"
    }
  )
  {
    firstName,
    lastName,
    dob,
    email,
    role {
      id
    }
  }
}`
}

export const getUsersList = () => {
    return `query{
  getUsersList{
    firstName,
    lastName,
    dob,
    email,
    role {
      id
    }
  }
}`
}