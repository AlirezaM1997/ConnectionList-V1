import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import { Box, Button, Link, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import { ISocialNetworks } from "../interfaces/interface";
import { useState, useEffect } from "react";

const socialNetworks: ISocialNetworks[] = [
  { label: "توییتر", value: "twitter", logo: <TwitterIcon /> },
  { label: "تلگرام", value: "telegram", logo: <TelegramIcon /> },
  { label: "اینستاگرام", value: "instagram", logo: <InstagramIcon /> },
  { label: "فیسبوک", value: "facebook", logo: <FacebookIcon /> },
  { label: "لینکدین", value: "linkedIn", logo: <LinkedInIcon /> },
  { label: "وب سایت", value: "website", logo: <PublicIcon /> },
];

export default function AddNewConnection({
  checked,
  connectionList,
  setConnectionList,
  setChecked,
}: any) {
  const [connectionType, setConnectionType] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  useEffect(() => {
    if (link !== "" && connectionType !== "undefined") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [connectionType, link]);
  const addNew = () => {
    const newConnection = { connectionType, link };
    setConnectionList([...connectionList, newConnection]);
  };
  return (
    <>
      <Collapse in={checked}>
        <Box
          mt={2}
          p={2}
          sx={{
            backgroundColor: "rgb(244, 246, 248)",
            borderRadius: "16px",
          }}
        >
          <Typography
            fontWeight={500}
            fontSize={"0.75rem"}
            lineHeight={1.57}
            color="#343d48"
            mb={2}
          >
            افزودن مسیر ارتباطی
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} md={4}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={socialNetworks}
                defaultValue={{
                  label: "undefined",
                  value: "",
                  logo: null,
                }}
                inputValue={connectionType}
                onInputChange={(event, newInputValue) => {
                  setConnectionType(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="نوع" />}
                renderOption={(props, option) => (
                  <Box component="li" sx={{}} {...props}>
                    {option.logo}
                    {option.label}
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="outlined-basic"
                label="لینک"
                variant="outlined"
                dir="rtl"
                fullWidth
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-end" },
              mt: { xs: "16px" },
            }}
          >
            <Button
              onClick={() => setChecked(false)}
              sx={{
                color: "#ffa82e",
                py: "3px",
                px: "9px",
                borderRadius: "4px",
                borderWidth: "1px",
                borderColor: "rgba(255, 168, 46, 0.5)",
                borderStyle: "solid",
                fontWeight: "500",
                fontSize: "0.69rem",
                "&:hover": {
                  borderColor: "#ffa82e",
                  backgroundColor: "inherit",
                },
              }}
            >
              انصراف
            </Button>

            <Button
              disabled={disabled}
              onClick={() => addNew()}
              sx={{
                color: "#000000de",
                py: "3px",
                px: "9px",
                mr: { xs: "8px" },
                backgroundColor: "rgb(255, 168, 46)",
                boxShadow:
                  "rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
                borderRadius: "4px",
                fontWeight: "500",
                fontSize: "0.69rem",
                "&:hover": {
                  borderColor: "#ffa82e",
                  backgroundColor: "inherit",
                },
              }}
            >
              ثبت مسیر ارتباطی{" "}
              {`${connectionType === "undefined" ? "" : connectionType}`}
            </Button>
          </Box>
        </Box>
      </Collapse>
      <style>
        {`.Mui-disabled { 
        background-color: #D6D8DA;
        box-shadow:none;
        }`}
      </style>
    </>
  );
}
