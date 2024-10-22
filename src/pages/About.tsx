import { Layout } from "./layout/layout";

export const About = () => {
  return (
    <Layout>
      <section className="w-full py-20 bg-gray-50">
        <h1 className="text-6xl font-bold text-center text-black">About TimeTower</h1>
        <div className="max-w-3xl mx-auto text-center mt-10">
          <p className="text-xl leading-relaxed text-gray-700">
            <strong className="text-black">Time Tower</strong> is a captivating match-3 puzzle game that challenges players to explore different eras through its unique time-bending mechanics. As you progress, you will encounter intricate puzzles that increase in complexity, unveiling the secrets of the mysterious Time Tower.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mt-4">
            The game offers a rich and immersive experience for puzzle lovers, combining strategic gameplay, visually stunning design, and a captivating storyline. Whether you're competing on the global leaderboard or uncovering hidden secrets, <strong className="text-black">Time Tower</strong> is designed to test your skills and intellect.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mt-4">
            Join the adventure and see how far you can go in unraveling the mysteries of time!
          </p>
          <button
            type="button"
            className="mt-10 border-2 border-black text-black px-8 py-3 text-2xl font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded"
            onClick={() => window.open('https://drive.google.com/drive/folders/1FWk3ue2TgYTXL6sXy8C0qbfBaK0d4Imo?usp=drive_link', '_blank')} // Altere o caminho para o relatório do jogo
          >
            Download Game Report
          </button>
        </div>
      </section>
    </Layout>
  );
};
