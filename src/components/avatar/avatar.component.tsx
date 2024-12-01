import React, { FC } from 'react';
import { View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { styles } from './avatar.styles';

type LoaderProps = {
  iconName: string;
};

export const Avatar: FC<LoaderProps> = ({ iconName }) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon name={iconName} size={100} />
    </View>
  );
};
