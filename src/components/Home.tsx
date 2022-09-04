import { Box, Link, Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <Box
        mt="40px"
        sx={{
          px: "24px",
          mx: { md: "auto" },
          maxWidth: { md: "900px" },
          direction: "rtl",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          fontWeight="600"
          sx={{
            textAlign: { xs: "right" },
          }}
          component="div"
        >
          خانه
        </Typography>
        <Link 
          variant="h6"
          color="#ffa82e" href="/dashboard">
          تنظیمات کاربری
        </Link>
      </Box>
    </>
  );
}
