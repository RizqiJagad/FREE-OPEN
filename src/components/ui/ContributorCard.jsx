import SocialLink from "./SocialLink";

export default function ContributorCard({ name, github, linkedin, twitter }) {
  return (
    <article
      className="flex flex-col items-center gap-3 p-6 rounded-lg border
                 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800
                 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* GitHub avatar */}
      <img
        src={`https://github.com/${github}.png`}
        alt={`${name}'s avatar`}
        className="w-20 h-20 rounded-full object-cover"
        loading="lazy"
      />

      {/* Contributor name */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {name}
      </h3>

      {/* Social links row */}
      <div className="flex flex-wrap justify-center gap-3">
        <SocialLink platform="github" username={github} />
        <SocialLink platform="linkedin" username={linkedin} />
        <SocialLink platform="twitter" username={twitter} />
      </div>
    </article>
  );
}
