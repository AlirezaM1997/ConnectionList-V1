import ListItem from "@mui/material/ListItem";
import { Box, Button, Link, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
function Icon({ icon }: any) {
  if (icon === "توییتر") {
    return <TwitterIcon />;
  } else if (icon === "تلگرام") {
    return <TelegramIcon />;
  } else if (icon === "فیسبوک") {
    return <FacebookIcon />;
  } else if (icon === "اینستاگرام") {
    return <InstagramIcon />;
  } else if (icon === "لینکدین") {
    return <LinkedInIcon />;
  } else {
    return <PublicIcon />;
  }
}
export default function ConnectionItem({ item }: any) {
  return (
    <>
      <ListItem dir="rtl">
        <Box
          mt={2}
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
              }}
            >
              <EditIcon
                sx={{
                  color: "#ffa82e",
                  ml:"8px"
                }}
              />
              ویرایش
            </Button>
            <Button
              sx={{
                color: "#d32f2f",
              }}
            >
              <DeleteIcon
                sx={{
                  color: "#d32f2f",
                  ml:"8px"
                }}
              />
              حذف
            </Button>
          </Box>
        </Box>
      </ListItem>
    </>
  );
}
