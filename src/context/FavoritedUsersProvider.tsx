import { ReactNode, useState } from 'react';
import GithubUser from '../interfaces/GithubUser';
import FavoritedUsersContext from './FavoritedUsersContext'; // Certifique-se de que o caminho está correto

interface FavoritedUsersProviderProps {
  children: ReactNode;
}

export default function FavoritedUsersProvider({ children }: FavoritedUsersProviderProps) {
  const [favoritedUsers, setFavoritedUsers] = useState<Array<GithubUser> | undefined>(undefined);

  return (
    <FavoritedUsersContext.Provider value={{ favoritedUsers, setFavoritedUsers }}>
      {children}
    </FavoritedUsersContext.Provider>
  );
}
