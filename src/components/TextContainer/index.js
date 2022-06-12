import { Box, Typography } from "@mui/material";
export const TextContainer = ({ topText, downText }) => {
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "700", fontSize: "1.375rem" }}
        component="p"
      >
        {topText}
      </Typography>
      <Typography
        sx={{ fontWeight: "400", fontSize: "1.1875rem" }}
        component="p"
      >
        {downText}
      </Typography>
    </Box>
  );
};
