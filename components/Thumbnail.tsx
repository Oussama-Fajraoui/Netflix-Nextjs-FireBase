import Image from "next/image";
import { modalState, movieState } from "../atoms/modalAtom";
import { baseUrlThumbnail } from "../constants/movie";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";

interface Props {
  movie: Movie | DocumentData;
  //   movie: Movie | DocumentData;
}

const Thumbnail = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      onMouseOver={() => setShowText(true)}
      onMouseOut={() => setShowText(false)}>
      <h1
        className={`bottom-16 left-4 text-md font-bold text-[#e5e5e5] ${
          showText && "absolute z-20 "
        }`}>
        {movie.title}
      </h1>

      <Image
        src={`${baseUrlThumbnail}${movie.backdrop_path || movie.poster_path}`}
        className={`rounded-md object-cover md:rounded  ${
          showText && "opacity-40"
        }`}
        fill
        alt={movie.title}
      />
    </div>
  );
};

export default Thumbnail;