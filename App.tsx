/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Camera, CameraDevice, useCameraDevices } from 'react-native-vision-camera';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    ;(async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus()
      const microphonePermission = await Camera.getMicrophonePermissionStatus()
    })();
  }, [])

  const devices = useCameraDevices()
  const device = devices.front

  if (device == null) return <View><Text>Loading...</Text></View>
  return (
    <Camera
      style={{width: '100%', height: 400}}
      device={device}
      isActive={true}
    />
  )
}

export default App;
