import { Box, Stack, Typography, Avatar, Button } from "@mui/material";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { TextContainer } from "../../../components/TextContainer";
import AvatarGif from "../../../assets/avatar.gif";
export const RightSide = () => {
  return (
    <Box
      sx={{
        minWidth: "500px",
        color: "white",
        marginTop: "-5rem",
        "@media (max-width: 991px)": {
          marginTop: 10,
        },
      }}
    >
      <Box>
        <Typography
          component="p"
          pt={2}
          sx={{ fontSize: "1.375rem", fontWeight: "700" }}
        >
          Exclusive Private Sale Price
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "1.1875rem", fontWeight: "400" }}
        >
          January 25 - 5pm EST
        </Typography>
      </Box>
      <Stack direction="row" pt={2} sx={{ justifyContent: "space-between" }}>
        <TextContainer topText="Supply" downText="1000" />
        <TextContainer topText="Price" downText="0.15 ETH" />
        <TextContainer topText="Max" downText="10 per Wallet" />
      </Stack>
      <Stack
        mt={2}
        spacing={4.5}
        px={4}
        sx={{
          backgroundColor: "rgba(11, 11, 8, 0.8)",
          borderRadius: "0.5rem",
          paddingTop: "0.3rem",
          paddingBottom: "2rem",
        }}
      >
        <Box mt={2}>
          <Typography
            component="p"
            sx={{ fontSize: "3.1875rem", fontWeight: "900" }}
          >
            Limited Sale
          </Typography>
        </Box>
        <Box
          p={1.5}
          sx={{
            border: "1px solid white",
            borderRadius: "0.625rem",
            display: "flex",
            marginTop: "1rem !important",
          }}
        >
          <Avatar
            src={AvatarGif}
            sx={{
              borderRadius: "0.625rem",
              height: "5.125rem",
              width: "5.125rem",
            }}
          />
          <Box sx={{ textAlign: "end", width: "100%" }}>
            <Typography
              component="p"
              py={1.5}
              sx={{ fontSize: "0.9375rem", fontWeight: "400" }}
            >
              Limited Sale
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "1.375rem", fontWeight: "400" }}
            >
              0.15 ETH Each
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(123, 123, 123, 0.41)",
            border: "1px solid white",
            borderRadius: "0.625rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" py={1} spacing={-1}>
            <Button>
              <HorizontalRuleOutlinedIcon sx={{ color: "white" }} />
            </Button>
            <Typography
              component="h5"
              sx={{ fontSize: "1.375rem", fontWeight: "700" }}
            >
              1
            </Typography>
            <Button>
              <AddOutlinedIcon sx={{ color: "white" }} />
            </Button>
          </Stack>
          <Box>
            <Button>
              <Typography
                component="h5"
                px={1}
                sx={{
                  boxShadow: "0 0 10px 2px #fff",
                  backgroundColor: "white",
                  fontSize: "1.2em",
                  fontWeight: "500",
                  margin: "0.5rem",
                  color: "black",
                }}
              >
                SET MAX
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid",
            borderLeft: "0",
            borderRight: "0",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: "1.25rem", fontWeight: "700" }}
          >
            Total
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: "1.25rem", fontWeight: "700" }}
          >
            0.15 ETH
          </Typography>
        </Box>
        <Box>
          <Button>
            <Typography
              component="p"
              px={1}
              sx={{
                boxShadow: "0 0 10px 2px #fff",
                backgroundColor: "white",
                color: "black",
                fontSize: "1.375rem",
              }}
            >
              MINT
            </Typography>
          </Button>
          <Typography component="p">741 / 1000</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
