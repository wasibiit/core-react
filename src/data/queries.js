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

export const getUsersListQuery = () => {
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

export const getRolesQuery = () => {
    return `query{
  getRolesList{
    id
  }
}`
}

export const createUserQuery = (user) => {
    return `mutation {
  createUser(
    input: {
      firstName: "${user.firstName}",
      lastName: "${user.lastName}",
      email: "${user.email}",
      dob: "${user.dob}",
      password: "${user.password}",
      roleId: "${user.role}"
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