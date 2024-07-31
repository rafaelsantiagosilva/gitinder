interface UserCardHeaderProps {
  html_url: string | null;
  login: string;
  name: string | null;
  avatar_url: string | null;
  email?: string | null;
}

export default function UserCardHeader({ login, html_url, name, avatar_url, email }: UserCardHeaderProps) {
  return (
    <header className="flex flex-col justify-between items-center gap-2">
      <a className="hover:underline" href={html_url ?? '#'} target="blank">
        <h2 className="font-bold text-xl">{name || login}</h2>
      </a>
      <p className="text-sm text-gray-400">{email}</p>
      <img className="w-36 h-36 rounded-full" src={avatar_url ?? ''} />
    </header>
  );
}
