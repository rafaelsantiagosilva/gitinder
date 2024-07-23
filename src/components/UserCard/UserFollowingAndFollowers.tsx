import { FaUserFriends, FaUsers } from 'react-icons/fa';

interface UserFollowingAndFollowersProps {
  following: number;
  followers: number;
}

export default function UserFollowingAndFollowers({ following, followers }: UserFollowingAndFollowersProps) {
  return (
    <section className="flex gap-2 text-sm text-gray-600 font-medium justify-start items-center mt-2">
      <span className="flex items-center gap-1">
        <FaUserFriends /> Seguindo: {following}
      </span>
      <span className="flex items-center gap-1">
        <FaUsers /> Seguidores: {followers}
      </span>
    </section>
  );
}
