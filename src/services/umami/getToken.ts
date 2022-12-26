import { UMAMI } from './instance'


/**
 * run only on the server.
 * It will return the token if the request is successful, otherwise it will return null
 * @returns The token or null
 */
export const getToken = async () => {
  const body = { username: 'admin', password: '!Akugila998865' }
  try {
    const response = await UMAMI.post<{ token: string }>('/api/auth/login', body)
    // return null if the status not 200
    // return the token
    return response.data.token
  } catch (error) {
    return null
  }
}
