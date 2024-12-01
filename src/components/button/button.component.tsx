import React, { FC } from 'react';
import { Button as NativeButton, withTheme } from 'react-native-paper';
import { styles } from './button.styles';

type CustomSafeAreaViewProps = {
  text: string;
  type?: 'primary' | 'secondary' | 'tertiary';
  onPress: Function;
  align?: 'center' | 'flex-start' | 'flex-end';
};

export const CustomButton: FC<CustomSafeAreaViewProps> = ({
  text,
  type,
  onPress,
  align = 'center',
}) => {
  const getButtonColor = () => {
    if (type === 'primary') {
      return 'contained';
    }

    if (type === 'secondary') {
      return 'contained-tonal';
    }

    return 'text';
  };

  return (
    <NativeButton
      onPress={() => {
        onPress();
      }}
      mode={getButtonColor()}
      style={[
        type === 'primary' || type === 'secondary' ? styles.button : {},
        { alignItems: align },
      ]}
      labelStyle={type === 'primary' ? styles.label : {}}
    >
      {text}
    </NativeButton>
  );
};
