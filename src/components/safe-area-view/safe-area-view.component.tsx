import React, { FC, ReactNode } from 'react';
import { withTheme } from 'react-native-paper';
import { MD3Theme } from 'react-native-paper/lib/typescript/types';
import { SafeAreaView as SafeAreaNative } from 'react-native-safe-area-context';

type CustomSafeAreaViewProps = {
  children: ReactNode;
  theme: MD3Theme;
  isSolidBackground?: boolean;
};

const SafeAreView: FC<CustomSafeAreaViewProps> = ({
  children,
  theme,
  isSolidBackground = false,
}) => {
  return (
    <SafeAreaNative
      style={{
        backgroundColor: isSolidBackground
          ? theme.colors.primary
          : theme.colors.quaternary,
        flex: 1,
        paddingBottom: -35,
        margin: 0,
      }}
    >
      {children}
    </SafeAreaNative>
  );
};

export const CustomSafeAreaView = withTheme(SafeAreView);
