import GithubUser from '../../../interfaces/GithubUser';

interface FavoritedUser {
  user: GithubUser;
}

export default function FavoritedUser({ user }: FavoritedUser) {
  return (
    <a key={user.login} href={user.html_url} target="blank">
      <section className="flex items-center transition-transform hover:scale-105">
        <picture>
          <img src={user.avatar_url} alt="User avatar photo" className="size-16 rounded-full" />
        </picture>
        <div className="flex ml-2 flex-col">
          <h3 className="text-gray-200 font-medium">{user?.name || user.login}</h3>
          <p className="text-gray-400 line-clamp-1">{user?.bio}</p>
        </div>
      </section>
    </a>
  );
}
