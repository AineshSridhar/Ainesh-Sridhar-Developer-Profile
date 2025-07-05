import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-500" size={32} />,
    url: "https://leetcode.com/u/aineshsridhar/",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-700" size={32} />,
    url: "https://www.geeksforgeeks.org/user/aineshs16jk/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" size={32} />,
    url: "https://github.com/AineshSridhar/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-blue-700" size={32} />,
    url: "https://www.linkedin.com/in/aineshsridhar/",
  },
];

export default function LogoBar() {
  return (
    <div className="bg-white py-4 flex flex-wrap justify-center gap-8 shadow">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          {profile.icon}
          <span className="text-blue-700 font-medium underline">{profile.name}</span>
        </a>
      ))}
    </div>
  );
}
