import GithubUser from '../../../interfaces/GithubUser';

interface FavoritedUser {
  user: GithubUser;
}

export default function FavoritedUser({ user }: FavoritedUser) {
  return (
    <a href={user.html_url} target="blank">
      <section className="flex items-center transition-transform hover:scale-105">
        <picture className="w-full">
          <img src={user.avatar_url} alt="User avatar photo" className="size-16 rounded-full" />
        </picture>
        <div className="flex flex-col">
          <h3 className="text-gray-200 font-medium">{user?.name || user.login}</h3>
          <p className="text-gray-400 line-clamp-1">{user?.bio}</p>
        </div>
      </section>
    </a>
  );
}
