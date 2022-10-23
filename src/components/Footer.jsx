import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
  return (
    <nav className="absolute w-full flex justify-center bottom-0 bg-transparent">
      <ul>
        <li className="bg-black rounded-md px-1">
          <a
            className="text-white"
            href="https://github.com/rolckeirnad"
          >
            GitHub
            {' '}
            <FontAwesomeIcon icon={brands('github')} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
