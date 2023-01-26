import Head from "next/head";
import { modalState, movieState } from "../atoms/modalAtom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";
import { Movie } from "../typings";
import requests from "../utils/requests";
import { useRecoilValue } from "recoil";
import Modal from "../components/Modal";
import useList from "../hooks/useList";
import Footer from "../components/Footer";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  warMovies: Movie[];
  sfMovies: Movie[];
  horrorMovies: Movie[];
  animationMovies: Movie[];
  documentaries: Movie[];
  upcomingMovies: Movie[];
  nowPlaying: Movie[];
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  warMovies,
  sfMovies,
  animationMovies,
  topRated,
  trendingNow,
  upcomingMovies,
  nowPlaying,
}: Props) => {
  const { user, loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const movie = useRecoilValue(movieState);
  const list = useList(user?.uid);

  if (loading) return null;

  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}>
      <Head>
        <title>
          {movie?.title || movie?.original_name || "Home"} - Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Now Playing" movies={nowPlaying} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Upcoming" movies={upcomingMovies} />
          <Row title="War" movies={warMovies} />
          {/* My List */}
          {list.length > 0 && <Row title="My List" movies={list} />}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Science-Fiction" movies={sfMovies} />
          <Row title="Scary" movies={horrorMovies} />
          <Row title="Animation" movies={animationMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    warMovies,
    sfMovies,
    comedyMovies,
    horrorMovies,
    animationMovies,
    documentaries,
    upcomingMovies,
    nowPlaying,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchWarMovies).then((res) => res.json()),
    fetch(requests.fetchSFMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchAnimationMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchUpcoming).then((res) => res.json()),
    fetch(requests.fetchNowPlaying).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      warMovies: warMovies.results,
      sfMovies: sfMovies.results,
      horrorMovies: horrorMovies.results,
      animationMovies: animationMovies.results,
      documentaries: documentaries.results,
      upcomingMovies: upcomingMovies.results,
      nowPlaying: nowPlaying.results,
    },
  };
};