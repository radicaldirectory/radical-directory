import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "components/Footer";
import { Page } from "components/Page";

const manifesto = [
  "fuck colonialism.",
  "yes to organising.",
  "fuck capitalism.",
  "yes to building power.",
  "fuck ableism.",
  "yes to solidarity.",
  "fuck the cis-het patriarchy.",
  "yes to democracy.",
  "fuck white supremacy.",
  "yes to mutual aid.",
  "fuck fascism.",
  "yes to direct action.",
  "fuck zuckerberg.",
  "yes to connection.",
  "fuck the police.",
  "yes to transformative justice.",
  "abolish prisons.",
  "housing justice.",
  "disability justice.",
  "health justice.",
  "food sovereignty.",
  "land back.",
  "fuck competition.",
  "yes to collaboration.",
  "fuck hierarchy.",
  "yes to grassroots.",
  "fuck profiteering.",
  "yes to people power.",
  "fire to the prisons.",
  "no borders.",
  "dismantle the military industrial complex.",
  "yes to rebellion.",
  "yes to resistance.",
  "stop genocide.",
  "close the camps.",
  "queer liberation.",
  "trans liberation.",
  "dismantle the prison industrial complex.",
  "free healthcare.",
  "community care.",
  "support survivors.",
  "free Palestine.",
  "free West Papua.",
];

const Home: NextPage = () => {
  const [statement, setStatement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatement((statement) =>
        // statement + 1 < manifesto.length ? statement + 1 : 0
        Math.floor(Math.random() * manifesto.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Page title="Radical Directory">
      <div className="min-h-screen w-full flex flex-col items-center justify-center xl:flex-row xl:max-h-screen">
        <header className="flex-grow flex flex-col px-4 w-full sm:w-2/3 max-w-screen-md h-screen justify-center xl:max-w-screen-sm xl:flex-grow">
          <h1 className="p-4 text-5xl md:text-6xl font-title border-4 text-center border-black self-start dark:border-gray-300 xl:self-center xl:fixed">
            Radical <br /> Directory
          </h1>

          <h2 className="mt-20 text-3xl md:text-4xl font-sans font-bold text-right self-end xl:hidden">
            A platform for <br /> social justice media
          </h2>
        </header>

        <main className="px-4 flex flex-col items-center justify-center max-w-lg xl:max-h-screen xl:justify-start xl:flex-grow">
          <div className="hidden xl:flex xl:flex-shrink-0 h-screen xl:justify-center">
            <h2 className="mt-20 text-3xl md:text-4xl font-sans font-bold self-center text-center xl:mt-0">
              A platform for <br /> social justice media
            </h2>
          </div>
          <p className="pg">
            Building on the work of previous generations of community
            broadcasters and media-makers, we want to create a new
            community-controlled platform that amplifies grassroots action.
          </p>
          <b className="text-xl mt-6 font-bold tracking-wider text-center">
            {manifesto[statement]}
          </b>
          <p className="pg">
            A platform that makes social media redundant for organising. A place
            to share updates on the projects we&apos;re working on, the events
            we&apos;re organising, the fights we&apos;re winning and the fights
            we need help with.
          </p>
          <div className="flex items-stretch justify-center flex-wrap max-w-3xl flex-col md:flex-row mt-10">
            <Link href="/post/open-letter">
              <a className="card">
                <h2>???? Open Letter &rarr;</h2>
                <p>Why do grassroots activists need their own platform?</p>
              </a>
            </Link>

            <a href="https://discord.gg/fRURFnac4H" className="card">
              <h2>???? Join Our Discord &rarr;</h2>
              <p>
                Give feedback and ideas. Get first updates. Join our open
                meetings. Organise with us.
              </p>
            </a>

            {/* <a href="" className="card">
            <h2>Donate &rarr;</h2>
            <p>Check out our Chuffed fundraiser.</p>
            </a> */}

            <Link href="/post/faq">
              <a className="card">
                <h2>???? FAQ &rarr;</h2>
                <p>
                  Who is behind this project? How is it being organised? How
                  will it work?
                </p>
              </a>
            </Link>

            <Link href="/writing">
              <a className="card">
                <h2>???? Writing &rarr;</h2>
                <p>Updates and thinking as the project develops.</p>
              </a>
            </Link>
          </div>
          <Footer />
        </main>
      </div>
    </Page>
  );
};

export default Home;
