import { useState, useEffect } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import fetchUser from '../../api/fetchUser';
import GithubUser from '../../interfaces/GithubUser';
import UserCardHeader from './UserCardHeader';
import UserFollowingAndFollowers from './UserFollowingAndFollowers';

interface UserCardProps {
  animate: boolean;
}

export default function UserCard({ animate }: UserCardProps) {
  const [user, setUser] = useState<GithubUser | undefined>();

  const getUserFromApi = async () => {
    const response = await fetchUser();
    setUser(response);
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  /*
    Animação de ir para direita:
    - initial={{ x: 0, y: 0, rotate: 0 }} 
    - animate={{ x: 300, y: 140, rotate: 20 }}
    - transition={{ duration: 0.5 }}

    Animação de ir para a esquerda:
    - initial={{ x: 0, y: 0, rotate: 0 }}
    - animate={{ x: -300, y: 140, rotate: -20 }}
    - transition={{ duration: 0.5 }}
  */

  return user ? (
    <motion.div
      className="box bg-gray-950 text-gray-200 mx-auto mt-12 w-96 rounded-md shadow-md p-6 transition-transform hover:scale-105"
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={animate ? { x: -300, y: 140, rotate: -20 } : { x: 0, y: 0, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  ) : (
    <h2 className="flex justify-center items-center gap-1 text-gray-200 text-center text-md font-medium my-4">
      <MdErrorOutline /> Quantidade limite de requisições atingida! Por favor, volte mais tarde.
    </h2>
  );
}
