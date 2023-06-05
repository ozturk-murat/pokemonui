import React from "react";
import Image from "next/image";
import { styled } from "@mui/material";
import LoadingAnimation from "../Loading";

interface DetailsImageProps {
  imageUrl: string;
}

const Circle = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "center",
}));

const OuterCircle = styled("div")(({}) => ({
  alignItems: "center",
  border: "0.2rem solid white",
  background: "rgba(0, 0, 0, 0.2)",
  borderRadius: "50rem",
  display: "flex",
  height: "15rem",
  justifyContent: "center",
  position: "relative",
  width: "15rem",
}));

const InnerCircle = styled("div")(({}) => ({
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.3)",
  border: "0.3rem solid white",
  borderRadius: "40rem",
  display: "flex",
  height: "12rem",
  justifyContent: "center",
  width: "12rem",
}));


function DetailsImage({ imageUrl }: DetailsImageProps) {
  return (
    <Circle>
      {imageUrl ? (
        <OuterCircle>
          <InnerCircle>
            <Image width={150} height={150} src={imageUrl} alt="PİKA" />
          </InnerCircle>
        </OuterCircle>
      ) : (
        <LoadingAnimation />
      )}
    </Circle>
  );
}

export default DetailsImage;
