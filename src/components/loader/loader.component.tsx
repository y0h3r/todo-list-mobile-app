import React, { FC } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { styles } from './loader.styles';

type LoaderProps = {
  show: boolean;
};

export const Loader: FC<LoaderProps> = ({ show }) => {
  return show ? (
    <View style={styles.loaderContainer}>
      <LottieView
        loop
        autoPlay
        style={styles.loader}
        source={require('@assets/files/loader.json')}
      />
    </View>
  ) : (
    <></>
  );
};
