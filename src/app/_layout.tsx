import { Text } from 'react-native';

import "@/global.css";
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';

export default function RootLayout() {
  return <GluestackUIProvider mode="light"><Text>oi</Text></GluestackUIProvider>;
}
