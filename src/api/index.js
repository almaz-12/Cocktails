import axios from 'axios'

export const get = async (url) => {
  try {
    const { data } = await axios.get(url)
    console.log(data);
    return data
  } catch (error) {
    console.error('API request failed:', error.message)
    throw error
  }
}
