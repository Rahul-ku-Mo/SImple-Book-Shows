import React from "react";
import { Box, Container, Typography} from "@mui/material";
import Text from "../shared/Text";

const FullCard = ({
  mName,
  mSum,
  mGen,
  mImg,
  mPre,
  mSch,
  mLang,
  mRun,
  mRat,
  mSc,
  mStat,
  stat
}) => {
  return (
    <>
      <Container
        sx={{ display: "flex", margin: "10px 0px" }}
      >
        <Box sx={{ maxWidth: "500px" }}>
          <img src={mImg} />
        </Box>
        <Box sx={{ padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "48px",
              fontWeight: "600",
              color: "#cc2121"
            }}
          >
            {mName}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {mRat !== null ? (
              <Text value={`${mRat}/10`} />
            ) : (
              <Text value={"Not Rated"} />
            )}
            <Text value={`${mGen}`} />
            <Text value={`Language: ${mLang}`} />
          </Box>
          <Text value={`Status: ${mStat}`} />
          <Text value={`Releasing date: ${mPre.slice(0,4)}`} />
          <Text value={mSch !== null ? `Scheduled on: ${mSch}` : `Not Scheduled Yet`}/>
          <Text value={`Average Runtime: ${mRun} mins`} />

          <Box>
            <div className="font-serif text-lg" dangerouslySetInnerHTML={{ __html: `${mSum}` }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <div
             onClick={() => {
               stat(true);
             }}
             className="p-1 bg-slate-300 rounded-md font-serif transition-all 250ms ease-in-out hover:scale-110">
              Book Now
            </div>
            <div className="font-serif ml-2">
              score: {Math.floor(mSc * 100)} %
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FullCard;
