import React, { FC } from 'react';
import { MD3Theme, Text as NativeText, withTheme } from 'react-native-paper';

enum TEXT_TYPES {
  TITLE = 'title',
  SUB_TITLE = 'sub_title',
  BODY = 'body',
}

enum COLORS {
  PRIMARY = 'primary',
  ACCENT = 'accent',
}

enum FONT_WEIGHT {
  TITLE = '700',
  SUB_TITLE = '600',
  BODY = '400',
}

type CustomSafeAreaViewProps = {
  text: string;
  theme: MD3Theme;
  type: 'title' | 'sub_title' | 'body';
  color: 'primary' | 'accent';
};

const Text: FC<CustomSafeAreaViewProps> = ({ theme, text, color, type }) => {
  const getTextColor = (): string => {
    let colorResult: string = theme.colors.primary;
    switch (color) {
      case COLORS.PRIMARY:
        colorResult = theme.colors.primary;
        break;

      case COLORS.ACCENT:
        colorResult = theme.colors.text;
        break;
    }

    return colorResult;
  };

  const getFontSize = (): number => {
    let fontSize: number = 16;
    switch (type) {
      case TEXT_TYPES.TITLE:
        fontSize = 24;
        break;

      case TEXT_TYPES.SUB_TITLE:
        fontSize = 20;
        break;

      case TEXT_TYPES.BODY:
        fontSize = 16;
        break;
    }
    return fontSize;
  };

  const getFontWeight = (): FONT_WEIGHT => {
    let fontWeight = FONT_WEIGHT.BODY;
    switch (type) {
      case TEXT_TYPES.TITLE:
        fontWeight = FONT_WEIGHT.TITLE;
        break;

      case TEXT_TYPES.SUB_TITLE:
        fontWeight = FONT_WEIGHT.SUB_TITLE;
        break;

      case TEXT_TYPES.BODY:
        fontWeight = FONT_WEIGHT.BODY;
        break;
    }
    return fontWeight;
  };

  return (
    <NativeText
      style={{
        color: getTextColor(),
        fontWeight: getFontWeight(),
        fontSize: getFontSize(),
      }}
    >
      {text}
    </NativeText>
  );
};

export const CustomText = withTheme(Text);
