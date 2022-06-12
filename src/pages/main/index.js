import { Stack } from "@mui/material";
import { LeftSide } from "./components/leftSide";
import { RightSide } from "./components/rightSide";
export const Main = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-around",
        width: "100%",
        zIndex: 100,
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        minHeight: "800px",
        maxWidth: 1080,
        margin: "auto",
        alignItems: "center",
        "@media (max-width: 991px)": {
          flexDirection: "column-reverse",
          height: "auto",
        },
      }}
    >
      <LeftSide />
      <RightSide />
    </Stack>
  );
};
