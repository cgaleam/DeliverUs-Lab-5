//incluye las funciones necesarias para realizar operaciones de autorización y relacionadas con el usuario. 
//También configura el token de autorización para futuras solicitudes.

import { post, put } from './helpers/ApiRequestsHelper'

function login (data) {
  return post('users/loginOwner', data)
}

function register (data) {
  return post('users/registerOwner', data)
}

function update (data) {
  return put('users', data)
}

function isTokenValid (storedToken) {
  return put('users/isTokenValid', { token: storedToken })
}

export { login, register, isTokenValid, update }
