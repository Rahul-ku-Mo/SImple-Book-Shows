import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./MediaCard.module.css";
import Text from "../shared/Text";
const MediaCard = ({
  moviePrem,
  movieImg,
  movieName,
  movieRating,
  movieGenre,
  movieLang,
  movieScore,
  movieId,
}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "10px" }} className={style.card}>
        <CardMedia
          component="img"
          alt={movieName}
          height="140"
          image={movieImg}
        />
        <CardContent sx={{ fontFamily: " 'Roboto Slab', serif" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            {movieName}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {movieRating !== null ? (
              <Text value={`${movieRating}/10`} />
            ) : (
              <Text value={"Not Rated"} />
            )}
            <Text value={`${movieGenre}`} />
            <Text value={`Language: ${movieLang}`} />
          </Box>
          <Text value={`Premiered on ${moviePrem.slice(0, 4)}`} />
        </CardContent>
        <CardActions sx={{ display: "flex" }}>
          <Link
            to={{
              pathname: `/pg2:${movieId}`,
              query: {id: movieId}  
            }}
            className="p-1 bg-slate-300 rounded-md font-serif transition-all 250ms ease-in-out hover:scale-110"
          >
            Movie details
          </Link>
          <div className="font-serif ml-2">
            score: {Math.floor(movieScore * 100)} %
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default MediaCard;
