import { createContext } from 'react';
import GithubUser from '../interfaces/GithubUser';

interface FavoritedUsersContextProps {
  favoritedUsers: Array<GithubUser> | undefined;
  setFavoritedUsers: (favoritedUsers: Array<GithubUser> | undefined) => void;
}

const DEFAULT_VALUE = {
  favoritedUsers: undefined,
  setFavoritedUsers: () => {},
};

const FavoritedUsersContext = createContext<FavoritedUsersContextProps>(DEFAULT_VALUE);
export default FavoritedUsersContext;