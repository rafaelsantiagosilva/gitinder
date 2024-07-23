import { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import fetchUser from '../../api/fetchUser';
import GithubUser from '../../interfaces/GithubUser';
import UserCardHeader from './UserCardHeader';
import UserFollowingAndFollowers from './UserFollowingAndFollowers';

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
        <UserCardHeader html_url={user?.html_url} name={user?.name} avatar_url={user?.avatar_url} email={user?.email} />

        <article className="text-sm text-center text-gray-400 my-2 line-clamp-3">
          <p>{user?.bio}</p>
        </article>

        <figure>
          <img
            className="mx-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user?.login}&layout=compact&bg_color=030712&border_color=E5E7EB&title_color=E5E7EB&text_color=9CA3AF&locale=pt-br&disable_animations`}
            alt="Top programming languagens of the user"
          />
        </figure>

        <UserFollowingAndFollowers following={user?.following} followers={user?.followers} />

        {user?.location && (
          <section className="flex gap-2 text-sm text-gray-600 font-medium justify-start items-center mt-2">
            <span className="flex items-center gap-1">
              <FaLocationDot /> {user?.location}
            </span>
          </section>
        )}
      </section>
    )
  );
}
