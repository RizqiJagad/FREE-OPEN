import githubIcon from "../../assets/images/github.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import twitterIcon from "../../assets/images/x-twitter.svg";

const PLATFORMS = {
  github: { url: "https://github.com/", icon: githubIcon, label: "GitHub" },
  linkedin: {
    url: "https://linkedin.com/in/",
    icon: linkedinIcon,
    label: "LinkedIn",
  },
  twitter: {
    url: "https://x.com/",
    icon: twitterIcon,
    label: "X (Twitter)",
  },
};

export default function SocialLink({ platform, username }) {
  if (!username) return null;

  const config = PLATFORMS[platform];
  if (!config) return null;

  return (
    <a
      href={`${config.url}${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-gray-600
                 dark:text-gray-400 hover:text-brand-teal dark:hover:text-brand-teal
                 transition-colors"
      aria-label={`Visit ${config.label} profile`}
    >
      <img
        src={config.icon}
        alt=""
        className="w-4 h-4 dark:invert dark:brightness-200"
        aria-hidden="true"
      />
      <span>{config.label}</span>
    </a>
  );
}
