import { useState, useEffect } from 'react';
import { FaUserFriends, FaUsers } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import fetchUser from '../api/fetchUser';
import GithubUser from '../interfaces/GithubUser';

export default function UserCard() {
  const [user, setUser] = useState<GithubUser | undefined>();

  const getUserFromApi = async () => {
    const response = await fetchUser();
    setUser(response);
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  console.info(user);

  return (
    user && (
      <section className="bg-gray-950 text-gray-200 mx-auto mt-12 w-96 rounded-md shadow-md p-6 transition-transform hover:scale-105">
        <header className="flex flex-col justify-between items-center gap-2">
          <a className="hover:underline" href={user?.html_url} target="blank">
            <h2 className="font-bold text-xl">{user?.name}</h2>
          </a>
          <p className="text-sm text-gray-400">{user?.email}</p>
          <img className="w-36 h-36 rounded-full" src={user?.avatar_url} alt="" />
        </header>

        <article className="text-sm text-center text-gray-400 my-2 line-clamp-3">
          <p>{user?.bio}</p>
        </article>

        <figure>
          <img
            className="mx-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user?.login}&layout=compact&bg_color=030712&border_color=E5E7EB&title_color=E5E7EB&text_color=9CA3AF&locale=pt-br`}
            alt="Top programming languagens of th user"
          />
        </figure>

        <section className="flex gap-2 text-sm text-gray-600 font-medium justify-start items-center mt-2">
          <span className="flex items-center gap-1">
            <FaUserFriends /> Seguindo: {user?.following}
          </span>
          <span className="flex items-center gap-1">
            <FaUsers /> Seguidores: {user?.followers}
          </span>
        </section>

        <section className="flex gap-2 text-sm text-gray-600 font-medium justify-start items-center mt-2">
          <span className="flex items-center gap-1">
            <FaLocationDot /> {user?.location}
          </span>
        </section>
      </section>
    )
  );
}
