import axios from 'axios';
import GithubUser from '../interfaces/GithubUser';

export default async function fetchUser(): Promise<GithubUser | undefined> {
  const USER_QUANTITY = 100;
  const API_URL = `https://api.github.com/users?per_page=${USER_QUANTITY}`;

  try {
    const response = await axios.get(API_URL);
    const users = response.data as GithubUser[];
    const randomUser = users[Math.round(Math.random() * users.length)];
    const userResponse = await axios.get(`https://api.github.com/users/${randomUser.login}`);
    return userResponse.data;
  } catch (error) {
    console.error(`Error: Impossible to fetch user. ${error}`);
    return undefined;
  }
}
