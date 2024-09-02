import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-zinc-800">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Games Finder
            </span>
          </a>
          <p className="text-zinc-400">This is a simple project that focuses on displaying cards and a search input.</p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
