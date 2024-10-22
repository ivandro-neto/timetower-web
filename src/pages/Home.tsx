import { Layout } from "./layout/layout";

export const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center w-full gap-16 py-20 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-7xl font-bold animate-fade-in">TimeTower</h1>
        <div className="bg-black w-32 h-32 rounded-full animate-pulse" />

        <p className="text-center text-lg max-w-2xl text-gray-700 leading-relaxed">
          Dive into the mysterious world of <strong>Time Tower</strong>, a challenging match-3 puzzle game where every move shapes the course of time. Unlock secrets, solve intricate puzzles, and explore breathtaking locations across different eras.
        </p>

        <button
          type="button"
          className="border-2 border-black px-8 py-3 text-2xl font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => window.open('https://drive.google.com/file/d/1ZMatbUQbMB_m_QyaxCC1yg-KuKVsgm34/view?usp=drive_link', '_blank')}
        >
          Download
        </button>
      </section>

      <section className="w-full py-20 text-center bg-white transition-opacity duration-1000 ease-out">
        <h2 className="text-4xl font-bold mb-8">An Engaging Puzzle Experience</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          In <strong>Time Tower</strong>, you’ll face a series of complex puzzles that grow in difficulty as you progress. Use your skills and strategic thinking to match and clear blocks, unlock hidden pathways, and uncover the story behind the Tower’s enigmatic presence.
        </p>
      </section>

      <section className="w-full py-20 text-center bg-gray-50 transition-transform duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold mb-8">Compete Globally</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Track your progress and compete with players around the world through our <strong>leaderboard system</strong>. Challenge yourself to rise to the top, earn unique achievements, and become the best puzzle solver in the world.
        </p>
      </section>

      <section className="w-full py-20 text-center bg-white transition-transform duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold mb-8">Play Anywhere</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Whether you’re on your PC or mobile device, <strong>Time Tower</strong> offers a seamless experience. The intuitive controls and visually captivating design make it easy to pick up and play anytime, anywhere.
        </p>
      </section>

      <div className="w-full flex justify-center py-20 bg-gradient-to-t from-white to-gray-100">
        <div className="bg-black w-32 h-32 rounded-full animate-pulse" />
      </div>

      <section className="w-full text-center py-20 bg-gray-100">
        <button
          type="button"
          className="border-2 border-black px-8 py-3 text-2xl font-semibold hover:bg-black hover:text-white transition-all duration-300 animate-fade-in-up"
          onClick={() => window.open('/register')}
        >
          Join the Adventure Today
        </button>
      </section>
    </Layout>
  );
};
