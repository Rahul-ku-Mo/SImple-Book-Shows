import { Box, Container } from "@mui/material";
import { React, useState } from "react";

const BookingForm = ({ stat }) => {
  const [name, setName] = useState("");
  const [tkt, setTkt] = useState("");

  const handle = (e) => {
    e.preventDefault();
    localStorage.setItem("Name", name);
    localStorage.setItem("No.Tickets", tkt);

    setName("");
    setTkt("");
  };
  // const remove = () => {
  //   localStorage.removeItem("Name");
  //   localStorage.removeItem("No.Tickets");
  // };

  return (
    <>
      <Container
        sx={{ border: "2px solid black ", padding: "1rem", marginTop: "10px" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="font-serif "> Booking</div>
          <div
            className="font-serif cursor-pointer"
            onClick={() => {
              stat(false);
            }}
          >
            {" "}
            Close
          </div>
        </Box>
        <form className="flex flex-col mt-2">
          <input
            className="border-blue-800 w-fit font-serif"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-fit mt-2 mb-2 font-serif"
            type="number"
            placeholder="No. of Tickets"
            value={tkt}
            onChange={(e) => setTkt(e.target.value)}
          />

          <div>
            <div
              className="p-1 bg-slate-300 w-fit rounded-md font-serif transition-all 250ms ease-in-out hover:scale-110"
              onClick={handle}
            >
              Book
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default BookingForm;
