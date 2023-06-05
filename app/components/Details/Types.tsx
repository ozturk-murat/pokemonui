import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";


interface Type {
  type: {
    name: string;
  };
}

interface DetailsTypeProps {
  types: Type[];
}

function Types({ types }: DetailsTypeProps) {
  return (
    <Box display="flex" justifyContent="center" sx={{ cursor: "pointer" }}>
      <Box
        borderRadius={16}
        width={200}
        border={1}
        borderColor={"white"}
        p={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        {types?.map((type: any) => (
          <Box
            key={type.slot}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Typography pr={1}>{type.type.name}</Typography>
            <Image
              src={`/icons/${type.type.name}.svg`}
              className="rounded-sm object-cover md:rounded"
              quality={75}
              placeholder="empty"
              alt={type.type.name}
              loading="lazy"
              width={15}
              height={15}
              priority={false}
              title={type.type.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Types;
