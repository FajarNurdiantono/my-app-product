import React from 'react';

function Navbar() {
  const NavbarItems = [
    {
      title: 'Home',
      url: '#',
    },
    {
      title: 'Contact',
      url: '#',
    },
    {
      title: 'Profile',
      url: '#',
    },
  ];
  return (
    <>
      <nav>
        <div class="flex h-24 bg-sky-900 py-8 px-32 justify-between">
          <h1 class="text-xl font-bold text-white cursor-pointer">Logo</h1>
          <ul class="flex space-x-6">
            {NavbarItems.map((item, index) => (
              <li class="text-sm font-bold text-white cursor-pointer" key={{ index }}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
