import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const FEED_ROUTE = '/';
const VIDEO_DETAIL_ROUTE = '/video';
const CHANNEL_DETAIL_ROUTE = '/channel';
const SEARCH_FEED_ROUTE = '/search';

export {VIDEO_DETAIL_ROUTE, SEARCH_FEED_ROUTE, CHANNEL_DETAIL_ROUTE, FEED_ROUTE}

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';
export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Понтова паляниця';
export const demoVideoTitle = 'Винигрет';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

export const categories = [
    { name: 'New', icon: <HomeIcon />, },
    { name: 'Понтова Паляниця', icon: <BreakfastDiningIcon />, },
    { name: 'Coding', icon: <CodeIcon />, },
    { name: 'ReactJS', icon: <CodeIcon />, },
    { name: 'NextJS', icon: <CodeIcon />, },
    { name: 'Music', icon: <MusicNoteIcon /> },
    { name: 'Education', icon: <SchoolIcon />, },
    { name: 'Podcast', icon: <GraphicEqIcon />, },
    { name: 'Movie', icon: <OndemandVideoIcon />, },
    { name: 'Gaming', icon: <SportsEsportsIcon />, },
    { name: 'Live', icon: <LiveTvIcon />, },
    { name: 'Sport', icon: <FitnessCenterIcon />, },
    { name: 'Fashion', icon: <CheckroomIcon />, },
    { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
    { name: 'Comedy', icon: <TheaterComedyIcon />, },
    { name: 'Gym', icon: <FitnessCenterIcon />, },
    { name: 'Crypto', icon: <DeveloperModeIcon />, },
];