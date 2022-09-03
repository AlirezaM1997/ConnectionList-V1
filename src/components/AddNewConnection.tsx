import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import { Box, Button, Link, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { withStyles} from "@mui/styles";
import { socialNetworks } from "../features/constants";
import { UID, validateUrl } from "../features/functions";
export default function AddNewConnection({
  checked,
  connectionList,
  setConnectionList,
  setChecked,
}: any) {
  const [inValidLink, setInvalidLink] = useState<boolean>(false);
  const CssTextField = withStyles({
    root: {
      // '& label.Mui-focused': {
      //   color: 'white',
      // },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: `${inValidLink ?"red":""}`,
        },
        '&:hover fieldset': {
          borderColor: `${inValidLink ?"red":""}`,
        },
        '&.Mui-focused fieldset': {
          borderColor: `${inValidLink ?"red":""}`,
        },
      },
    },
  })(TextField);
  const [connectionType, setConnectionType] = useState<string | any>(
    "undefined"
  );
  const [link, setLink] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inValidConnectionType, setInvalidConnectionType] =
    useState<boolean>(false);
  useEffect(() => {
    if (validateUrl(link) && connectionType !== "undefined") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [connectionType, link]);
  const textRef: any = useRef();
  const inputRef: any = useRef();
  const handleConnectionType = (e: any) => {
    setConnectionType(e);
    if (e === "undefined") {
      setInvalidConnectionType(true);
    } else {
      setInvalidConnectionType(false);
    }
  };
  const handleLink = (e: any) => {
    setLink(e);
    if (!validateUrl(textRef.current.value)) {
      setInvalidLink(true);
    } else {
      setInvalidLink(false);
    }
  };
  const addNew = () => {
    const newConnection = { connectionType, link, _id: UID() };
    setConnectionList([...connectionList, newConnection]);
    setConnectionType("undefined");
    setLink("");
    setChecked(false);
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
                value={connectionType}
                onChange={(e: ChangeEvent<HTMLInputElement | any>): void =>
                  handleConnectionType(e.target.innerText)
                }
                renderInput={(params) => (
                  <TextField {...params} inputRef={inputRef} label="نوع" />
                )}
                renderOption={(props, option) => (
                  <Box component="li" sx={{}} {...props}>
                    {option.logo}
                    {option.label}
                  </Box>
                )}
              />
              <Typography
                fontWeight={400}
                fontSize={"0.64rem"}
                lineHeight={1.66}
                color="rgb(211, 47, 47)"
                m={"3px 14px -20px"}
                display={`${inValidConnectionType ? "" : "none"}`}
              >
                وارد کردن این فیلد اجباری است
              </Typography>
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="outlined-basic"
                inputRef={textRef}
                label="لینک"
                variant="outlined"
                dir="rtl"
                fullWidth
                value={link}
                onChange={(e) => handleLink(e.target.value)}
              />
              <Typography
                fontWeight={400}
                fontSize={"0.64rem"}
                lineHeight={1.66}
                color="rgb(211, 47, 47)"
                m={"3px 14px -20px"}
                display={`${inValidLink ? "" : "none"}`}
              >
                وارد کردن این فیلد اجباری است
              </Typography>
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
              onClick={() => {
                setChecked(false);
                setConnectionType("undefined");
                setLink("");
              }}
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
                  backgroundColor: "#B27520",
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
        }
        `}
      </style>
    </>
  );
}
