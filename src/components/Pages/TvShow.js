import React, { useState } from "react";
import FullCard from "../ProfileCard/FullCard";
import BookingForm from "../BookingPage";

const TvShow = ({ movies }) => {
  const ID = parseInt(window.location.pathname.slice(5));
  const [show, setShow] = useState(false);

  return (
    <>
      {movies
        .filter((movie) => movie.show.id === ID)
        .map((mov) => (
          <div className="flex ">
            <FullCard
              key={mov.show.id}
              mName={mov.show.name}
              mSum={mov.show.summary}
              mGen={mov.show.genres}
              mImg={mov.show.image.original}
              mPre={mov.show.premiered}
              mSch={mov.show.schedule.days}
              mLang={mov.show.language}
              mRun={mov.show.averageRuntime}
              mRat={mov.show.rating.average}
              mSc={mov.score}
              mStat={mov.show.status}
              stat={setShow}
            />
            {show && (
              <div>
                <BookingForm stat={setShow} movieName={mov.show.name} />
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default TvShow;
