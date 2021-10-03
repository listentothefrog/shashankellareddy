import Head from "next/head";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Shashank Ellareddy - Coder, Gamer and Football Lover</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Shashank Ellareddy - Coder and Football Lover"
        />
      </Head>
      <Header />
      <main className="flex justify-center flex-col bg-white px-2">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black">
                Hello 👋
              </h1>
            </div>
            <p className="prose text-gray-600 dark:text-gray-400 mt-5">
              My name is Shashank, I am freshman at{" "}
              <a
                className="text-blue-600 hover:text-blue-500 hover:underline"
                href="https://www.ucps.k12.nc.us/Domain/11"
                target="_blank"
                rel="noreferrer"
              >
                Cuthbertson High
              </a>
              {""} and was introduced to coding when I was in 7th Grade. I am
              really happy that you are learning more about me and who I am.
              While you are here checkout my some of my {""}
              <a
                className="text-blue-600 hover:text-blue-500 hover:underline"
                href="https://github.com/listentothefrog?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                repos on Github
              </a>
              {""} and {""}
              <a
                className="text-blue-600 hover:text-blue-500 hover:underline"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                learn more about me.
              </a>
            </p>
            <div className="flex items-center justify-center px-2 mt-10">
              <a
                target="_blank"
                href="https://github.com/listentothefrog"
                rel="noreferrer"
              >
                <button className="md:mr-10 mr-5 px-14 py-2 rounded-lg text-white hover:bg-gray-800 bg-black transition duration-300 ease-in-out">
                  Github
                </button>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/shashank-ellareddy-2b43aa200/"
                rel="noreferrer"
              >
                <button className="px-14 py-2 rounded-lg text-white  hover:bg-blue-500  bg-blue-700 transition duration-300 ease-in-out">
                  Linkedin
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-full flex md:flex-row items-center justify-center mt-20">
          <div className="flex items-center justify-center flex-row">
            <div className="mr-4">
              <h1 className="text-center text-3xl md:text-4xl font-bold">
                Technologies that I love using
              </h1>
              <p className="text-center p-4 text-gray-500">
                Here some my favirote technologies and languages that I like
                using for my projects.
              </p>
              <div className="flex md:flex-row flex-col items-center justify-center">
                <li className="font-medium text-gray-500 text-xl text-center mt-5 sm:mt-3 hover:underline">
                  <a href="https://github.com/facebook/react">React</a>
                </li>
                <li className="font-medium text-gray-500 text-xl text-center mt-5 sm:mt-3 list ml-4 hover:underline">
                  <a href="https://github.com/vercel/next.js">NextJs</a>
                </li>
                <li className="font-medium text-gray-500 text-xl text-center mt-5 sm:mt-3 list ml-4 hover:underline">
                  <a href="https://github.com./microsoft/typescript">
                    Typescript
                  </a>
                </li>
                <li className="font-medium text-gray-500 text-xl text-center mt-5 sm:mt-3 list ml-4 hover:underline">
                  <a href="https://github.com/firebase">Firebase</a>
                </li>
                <li className="font-medium text-gray-500 text-xl text-center mt-5 sm:mt-3 list ml-4 hover:underline">
                  <a href="https://github.com/tailwindlabs/tailwindcss">
                    Tailwind
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
