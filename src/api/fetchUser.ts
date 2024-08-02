import axios from 'axios';
import GithubUser from '../interfaces/GithubUser';

const AUTHORIZATION_TOKEN = import.meta.env.VITE_AUTHORIZATION_TOKEN;
const API_VERSION = '2022-11-28';

async function fetchWithToken(randomUserLogin: string) {
  const userResponse = await axios.get(`https://api.github.com/users/${randomUserLogin}`, {
    headers: { Authorization: `Bearer ${AUTHORIZATION_TOKEN}`, 'X-GitHub-Api-Version': API_VERSION },
  });
  return userResponse.data;
}

async function fetchWithoutToken(randomUserLogin: string) {
  const userResponse = await axios.get(`https://api.github.com/users/${randomUserLogin}`);
  return userResponse.data;
}

export default async function fetchUser(): Promise<GithubUser | undefined> {
  const USER_QUANTITY = 50000;
  const API_URL = `https://api.github.com/users?per_page=${USER_QUANTITY}`;

  try {
    const response = await axios.get(API_URL);
    const users = response.data as GithubUser[];
    const randomUser = users[Math.round(Math.random() * users.length)];

    try {
      return await fetchWithToken(randomUser.login);
    } catch (error) {
      return await fetchWithoutToken(randomUser.login);
    }
  } catch (error) {
    console.error(`Error: Impossible to fetch user. ${error}`);
    return undefined;
  }
}
