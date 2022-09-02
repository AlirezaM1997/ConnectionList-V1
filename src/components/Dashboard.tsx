import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { FC, useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { IConnection } from "../interfaces/interface";
export default function Dashboard() {
  const [connectionType, setConnectionType] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [connectionList, setConnectionList] = useState<IConnection[]>([]);
  const addNew = () => {
    const newConnection = { connectionType, link };
    setConnectionList([...connectionList, newConnection]);
  };
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
          تنظیمات کاربری
        </Typography>
        <Breadcrumbs
          separator={
            <CircleIcon
              sx={{ width: "9.14px", color: "black" }}
              fontSize="small"
            />
          }
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/">
            خانه
          </Link>
          <Link color="inherit" href="/">
            کاربر
          </Link>
          <Typography color="text.primary"> تنظیمات کاربری</Typography>
        </Breadcrumbs>
        <Box
          p={3}
          mt={6}
          sx={{
            borderRadius: "16px",
            boxShadow:
              "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
          }}
        >
          <Typography
            fontWeight={400}
            fontSize={"0.642857rem"}
            lineHeight={1.66}
            color="#343d48"
          >
            مسیرهای ارتباطی
          </Typography>
          <Button
            variant="contained"
            onClick={addNew}
            sx={{
              color: "#ffa82e",
              mt: 2,
              py: "4px",
              px: "5px",
              boxShadow: "none",
              backgroundColor: "transparent",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              padding: { xs: "4px 6px", sm: "6px 16px" },
              "&:hover": {
                boxShadow: "none",
                backgroundColor: "#FFFCF6",
              },
            }}
          >
            + افزودن مسیر ارتباطی
          </Button>
        </Box>
      </Box>
    </>
  );
}
