import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkType = {
  name: string;
  path: string;
};

export default function NavLink(link: LinkType) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={link.path}
        className={`block py-2 px-3 mb-2 rounded text-dark md:bg-transparent dark:text-white font-normal text-sm md:p-0  ${
          pathname == link.path
            ? "text-white bg-blue-700 md:text-blue-700 md:dark-text-blue-500"
            : ""
        }`}
        aria-current="page"
      >
        {link.name}
      </Link>
    </li>
  );
}
