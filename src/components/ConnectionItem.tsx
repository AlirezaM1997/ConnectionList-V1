import ListItem from "@mui/material/ListItem";
import { Box, Button, Link, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./DeleteModal";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { socialNetworks } from "../features/constants";
import { Icon, validateUrl } from "../features/functions";
export default function ConnectionItem({
  item,
  connectionList,
  setConnectionList,
}: any) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [connectionType, setConnectionType] = useState<string | any>(
    item.connectionType
  );
  const [link, setLink] = useState<string>(item.link);
  const [disabledConfirm, setDisabledConfirm] = useState<boolean>(true);
  const [disabledEdit, setDisabledEdit] = useState<boolean>(false);
  const [inValidLink, setInvalidLink] = useState<boolean>(false);
  const textRef: any = useRef();
  const inputRef: any = useRef();
  const handleConnectionType = (e: any) => {
    setConnectionType(e);
  };
  const handleLink = (e: any) => {
    setLink(e);
    if (!validateUrl(textRef.current.value)) {
      setInvalidLink(true);
    } else {
      setInvalidLink(false);
    }
  };
  useEffect(() => {
    if (
      (validateUrl(link) && link !== item.link) ||
      (validateUrl(link) && connectionType !== item.connectionType)
    ) {
      setDisabledConfirm(false);
    } else {
      setDisabledConfirm(true);
    }
  }, [link, connectionType]);
  const edit = () => {
    const editedConnection = { connectionType, link, _id: item._id };
    const arr = [...connectionList];
    const p = arr.findIndex((i) => i._id === item._id);
    console.log(p);
    arr[p]=editedConnection
    setConnectionList(arr);
    setOpen(false);
    setDisabledEdit(false);
    setDisabledConfirm(true);
  };
  return (
    <>
      <ListItem
        dir="rtl"
        sx={{ p: "16px", display: "flex", flexDirection: "column" }}
      >
        <Box
          p={2}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgb(244, 246, 248)",
            borderRadius: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon icon={item.connectionType} />
            <Typography
              fontSize={"0.85rem"}
              fontWeight="400"
              sx={{
                textAlign: { xs: "right" },
                mx: { xs: "8px" },
              }}
              component="div"
            >
              {item.connectionType}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <Typography
                fontSize={"0.64rem"}
                fontWeight="400"
                sx={{
                  textAlign: { xs: "right" },
                  ml: "8px",
                }}
                component="div"
              >
                لینک :
              </Typography>
              <Link
                sx={{
                  textAlign: { xs: "right" },
                  color: "#ffa82e",
                  cursor: "pointer",
                  textDecorationColor: "#ffa82e",
                }}
                dir="ltr"
              >
                {item.link}
              </Link>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                color: "#ffa82e",
                "&:disabled": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => {
                setOpen(true);
                setDisabledEdit(true);
              }}
              disabled={disabledEdit}
            >
              <EditIcon
                sx={{
                  color: `${disabledEdit ? "#B5B6B8" : "#ffa82e"}`,
                  ml: "8px",
                }}
              />
              ویرایش
            </Button>
            <Button
              sx={{
                color: "#d32f2f",
              }}
              onClick={() => setOpenModal(true)}
            >
              <DeleteIcon
                sx={{
                  color: "#d32f2f",
                  ml: "8px",
                }}
              />
              حذف
            </Button>
            <DeleteModal
              id={item._id}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setConnectionList={setConnectionList}
              connectionList={connectionList}
            />
          </Box>
        </Box>
        <Collapse
          in={open}
          sx={{
            width: "100%",
            p: "16px",
            backgroundColor: "rgb(244, 246, 248)",
            borderRadius: "16px",
            mt: "-25px",
          }}
        >
          <Box
            py={2}
            pt={4}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "auto",
            }}
          >
            <Typography
              fontSize={"0.75rem"}
              fontWeight="500"
              sx={{
                textAlign: { xs: "right" },
                mb: "16px",
              }}
              component="div"
            >
              ویرایش مسیر ارتباطی {item.connectionType}
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
                  setOpen(false);
                  setDisabledEdit(false);
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
                disabled={disabledConfirm}
                onClick={() => edit()}
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
                ویرایش مسیر ارتباطی{" "}
                {`${connectionType === "undefined" ? "" : connectionType}`}
              </Button>
            </Box>
          </Box>
        </Collapse>
      </ListItem>
    </>
  );
}
