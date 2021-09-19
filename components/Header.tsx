const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky md:my-8 bg-opacity-60">
      <h2 className="text-sm md:text-lg font-bold">Shashank</h2>
      <div>
        <a className="p-1 text-gray-900 sm:p-4">Stats</a>
        <a className="p-1 text-gray-900 sm:p-4">About Me</a>
        <a className="p-1 text-gray-900 sm:p-4">Blogs</a>
        <a className="p-1 text-gray-900 sm:p-4" href="/">
          Home
        </a>
      </div>
    </nav>
  );
};

export default Header;
