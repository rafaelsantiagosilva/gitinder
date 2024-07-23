import axios from 'axios';
import GithubUser from '../interfaces/GithubUser';

export default async function fetchUser(): Promise<GithubUser | undefined> {
  //   const USER_QUANTITY = 0;
  //   const API_URL = `https://api.github.com/users?per_page=${USER_QUANTITY}`;

  try {
    const username = 'rafaelsantiagosilva';
    const user = await axios.get(`https://api.github.com/users/${username}`);
    return user.data;
  } catch (error) {
    console.error(`Error: Impossible to fetch user. ${error}`);
    return undefined;
  }
}
