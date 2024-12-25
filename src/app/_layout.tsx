import { StatusBar, Text, View } from 'react-native';

import '@/global.css';
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import React from 'react';
import { Center } from '../components/ui/center';
import { Loading } from '../components/loading';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <GluestackUIProvider mode="dark">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <Center className="flex-1 bg-background-gray700">
          <Text>Douglas</Text>
        </Center>
      ) : (
        <Loading />
      )}
    </GluestackUIProvider>
  );
}
