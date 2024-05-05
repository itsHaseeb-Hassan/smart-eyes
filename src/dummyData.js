import Home from "./static/images/Icons/LightMode/Home_icon.svg";
import HomeDark from "./static/images/Icons/DarkMode/HomeDark.svg";
import Location from "./static/images/Icons/Location_Icon.svg";
import LocationDark from "./static/images/Icons/DarkMode/LocationDark.svg";
import Camera from "./static/images/Icons/Camera_Icon.svg";
import CameraDark from "./static/images/Icons/DarkMode/CameraDark.svg";
import LiveStreaming from "./static/images/Icons/LiveStreaming_Icon.svg";
import LiveStreamingDark from "./static/images/Icons/DarkMode/VideoDark.svg";
import SubUser from "./static/images/Icons/SideBar_User_Icon.svg";
import SubUserDark from "./static/images/Icons/DarkMode/SubUserDark.svg";
import License from "./static/images/Icons/License_Icon.svg";
import LicenseDark from "./static/images/Icons/DarkMode/LicenseDark.svg";
import EllipseGreen from "./static/images/Icons/Ellipse/EllipseGreen.svg";
import EllipseLightGreen from "./static/images/Icons/Ellipse/EllipseLightGreen.svg";
import EllipseOrange from "./static/images/Icons/Ellipse/EllipseOrange.svg";
import EllipseRed from "./static/images/Icons/Ellipse/EllipseRed.svg";
import EllipsePurple from "./static/images/Icons/Ellipse/EllipsePurple.svg";
// dummy data for links of pages
export const SidebarProducts = [
  {
    id: 1,
    icon: Home,
    darkModeIcon: HomeDark,
    iconName: "DashBoard",
    pathname: "/",
  },
  {
    id: 2,
    icon: Location,
    darkModeIcon: LocationDark,
    iconName: "Sites",
    pathname: "/sites",
  },
  {
    id: 3,
    icon: Camera,
    darkModeIcon: CameraDark,
    iconName: "Cameras",
    pathname: "/cameras",
  },
  {
    id: 4,
    icon: LiveStreaming,
    darkModeIcon: LiveStreamingDark,
    iconName: "LiveStreams",
    pathname: "/liveStreaming",
  },
  {
    id: 5,
    icon: SubUser,
    darkModeIcon: SubUserDark,
    iconName: "Sub Users",
    pathname: "/subUser",
  },
  {
    id: 6,
    icon: License,
    darkModeIcon: LicenseDark,
    iconName: "License",
    pathname: "/license",
  },
];

export const CamerasArray = [
  {
    id: 1,
    title: "Cam",
    location: "Office",
  },
  {
    id: 2,
    title: "Corridor",
    location: "Office",
  },
  {
    id: 3,
    title: "Dining Room",
    location: "Home",
  },
  {
    id: 4,
    title: "Entrance",
    location: "Factory",
  },
];

export const SitesArray = [
  {
    id: 1,
    title: "office",
    Number_of_Cameras: 20,
  },
  {
    id: 2,
    title: "Home",
    Number_of_Cameras: 8,
  },
  {
    id: 3,
    title: "Factory",
    Number_of_Cameras: 21,
  },
  {
    id: 4,
    title: "Other",
    Number_of_Cameras: 20,
  },
];

export const ProfileArray = [
  {
    id: 1,
  },
];

export const AcivityLog = [
  {
    id: 1,
    image: EllipseGreen,
    name: "User Logged in",
  },
  {
    id: 2,
    image: EllipseLightGreen,
    name: "Changes the setings",
  },
  {
    id: 3,
    image: EllipseOrange,
    name: " Updated Profile picture ",
  },
  {
    id: 4,
    image: EllipseRed,
    name: "Lorem ipsum",
  },
  {
    id: 5,
    image: EllipsePurple,
    name: "Lorem ipsum",
  },
];
