import React from "react";
import { Container, Typography, Box } from "@mui/material";
import MediaCard from "../ProfileCard/MediaCard";

const TvShows = ({ movies }) => {
  return (
    <>
      <Container>
        <Typography
          sx={{
            fontFamily: "'Poppins', serif",
            fontWeight: "700",
            fontSize: "2rem",
          }}
        >
          TV SHOWS
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {movies.map((mov) => (
            <MediaCard
              key={mov.show.id}
              movieImg={mov.show.image.medium}
              moviename={mov.show.name}
              movieRating={mov.show.rating.average}
              movieScore={mov.score}
              movieGenre={mov.show.genres}
              movieLang={mov.show.language}
              moviePrem={mov.show.premiered}
              movieId={mov.show.id}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default TvShows;
