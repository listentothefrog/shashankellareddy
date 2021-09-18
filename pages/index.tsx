import Head from "next/head";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Shashank Ellareddy - Coder, Gamer and Football Lover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 bg-opacity-60">
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
      <main className="flex flex-col justify-center bg-white px-2">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
              Hello 👋
            </h1>
            <p className="prose text-gray-600 dark:text-gray-400 mb-16">
              My name is Shashank, I am freshman at{" "}
              <a
                className="text-blue-600 hover:text-blue-500"
                href="https://www.ucps.k12.nc.us/Domain/11"
                target="_blank"
              >
                Cuthburtson High
              </a>
              {""} and was introduced to coding when I was in 7th Grade. I am
              really happy that you are learning more about me and who I am.
              While you are here checkout my some of my {""}
              <a
                className="text-blue-600 hover:text-blue-500"
                href=""
                target="_blank"
              >
                projects
              </a>
              {""} and {""}
              <a
                className="text-blue-600 hover:text-blue-500"
                href=""
                target="_blank"
              >
                learn more about me.
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
