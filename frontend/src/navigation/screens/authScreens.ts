import Chat from 'screens/Chat';
import Collection from 'screens/Collection';
import Messaging from 'screens/Chat/Messaging';
import Settings from 'screens/Settings';
import Swipe from 'screens/Swipe';
import { CHAT, COLLECTION, SETTINGS, SWIPE, MESSAGING } from 'utils/route';
import IScreens from './IScreens';

const authScreens: IScreens[] = [
  {
    name: COLLECTION,
    component: Collection,
  },
  {
    name: SWIPE,
    component: Swipe,
  },
  {
    name: SETTINGS,
    component: Settings,
  },
  {
    name: CHAT,
    component: Chat,
  },
  {
    name: MESSAGING,
    component: Messaging,
  },
];

export default authScreens;
