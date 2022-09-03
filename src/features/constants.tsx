import { ISocialNetworks } from "../interfaces/interface";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

const socialNetworks: ISocialNetworks[] = [
  { label: "توییتر", value: "twitter", logo: <TwitterIcon /> },
  { label: "تلگرام", value: "telegram", logo: <TelegramIcon /> },
  { label: "اینستاگرام", value: "instagram", logo: <InstagramIcon /> },
  { label: "فیسبوک", value: "facebook", logo: <FacebookIcon /> },
  { label: "لینکدین", value: "linkedIn", logo: <LinkedInIcon /> },
  { label: "وب سایت", value: "website", logo: <PublicIcon /> },
];
export { socialNetworks };
