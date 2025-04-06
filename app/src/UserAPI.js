// Name: Phuc Le

const apiURL = 'http://localhost:3001'

export default class UserAPI {

  static fetchUsers() {
    // You can configure a delay on the API if you 
    // want to see what happens if the server is slow.
    console.log('Fetching')
    return fetch(`${apiURL}/users?delay=1`).then(response => {
      return response.json()
    })
  }

  static fetchsearchUsers(user) {
    // You can configure a delay on the API if you 
    // want to see what happens if the server is slow.
    let parameters = new URLSearchParams(user).toString()
    return fetch(`${apiURL}/users_search?${parameters}`).then(response => {
      return response.json()
    })
  }

  static addUser(user) {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(user)
    }
    console.log('Attempting to post new user')

    return fetch(`${apiURL}/users/`, options).then(async response => {
      if (response.ok) {
        console.log('Response was ok')
        return response.json()
      } else {
        console.log('There was a error')
        throw new Error(`Problem with POST:  ${(await response.json()).message}`)
      }
    })
  }

  static modifyUser(user) {
    if (!user.id) {
      throw new Error('user must have an id to update')
    }

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(user)
    }
    console.log('Attempting to post modification to user')
    console.log(user)

    return fetch(`${apiURL}/users/${user.id}`, options).then(async response => {
      if (response.ok) {
        console.log('Response was ok')
        return response.json()
      } else {
        console.log('There was a error')
        throw new Error(`Problem with POST:  ${(await response.json()).message}`)
      }
    })
  }

  static deleteUser(user) {
    if (!user.id) {
      throw new Error('user must have an id to update')
    }

    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(user)
    }
    console.log('Attempting to post modification to user')
    console.log(user)

    return fetch(`${apiURL}/users/${user.id}`, options).then(async response => {
      if (response.ok) {
        console.log('Response was ok')
        return response.json()
      } else {
        console.log('There was a error')
        throw new Error(`Problem with POST:  ${(await response.json()).message}`)
      }
    })
  }
}