import axios from 'axios';
import GithubUser from '../interfaces/GithubUser';

export default async function fetchUser(): Promise<GithubUser | undefined> {
  const USER_QUANTITY = 50000;
  const API_URL = `https://api.github.com/users?per_page=${USER_QUANTITY}`;

  const AUTHORIZATION_TOKEN = import.meta.env.VITE_AUTHORIZATION_TOKEN;
  const API_VERSION = '2022-11-28';

  try {
    const response = await axios.get(API_URL);
    const users = response.data as GithubUser[];
    const randomUser = users[Math.round(Math.random() * users.length)];
    const userResponse = await axios.get(`https://api.github.com/users/${randomUser.login}`, {
      headers: { Authorization: `Bearer ${AUTHORIZATION_TOKEN}`, 'X-GitHub-Api-Version': API_VERSION },
    });
    return userResponse.data;
  } catch (error) {
    console.error(`Error: Impossible to fetch user. ${error}`);
    return undefined;
  }
}
