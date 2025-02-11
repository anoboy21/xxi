import Link from 'next/link';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-end items-center h-16 mt-8 sm:mt-12 sm:mb-20 px-6 bg-stone-800">
      <div className="flex items-center gap-3">
        <span className="text-xl">Contact Me :</span>
        <Link href="https://github.com/">
          <a
            target="_blank"
            title="Github"
            className="hover-hover:hover:text-inherit"
          >
            <FaGithub size={24} />
          </a>
        </Link>
        <Link href="">
          <a
            target="_blank"
            title="Facebook"
            className="hover-hover:hover:text-inherit"
          >
            <FaFacebook size={24} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
