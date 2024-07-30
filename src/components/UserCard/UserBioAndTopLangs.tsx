interface UserBioAndTopLangs {
  bio: string | null;
  login: string;
}

export default function UserBioAndTopLangs({ bio, login }: UserBioAndTopLangs) {
  return (
    <>
      <article className="text-sm text-center text-gray-400 my-2 line-clamp-3">
        <p>{bio}</p>
      </article>

      <figure>
        <img
          className="mx-auto"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&layout=compact&bg_color=030712&border_color=E5E7EB&title_color=E5E7EB&text_color=9CA3AF&locale=pt-br&disable_animations`}
          alt="Top programming languagens of the user"
        />
      </figure>
    </>
  );
}
