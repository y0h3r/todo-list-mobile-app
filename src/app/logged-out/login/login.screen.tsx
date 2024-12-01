import { FC, useState } from 'react';
import { MD3Theme, TextInput, withTheme } from 'react-native-paper';
import { Image, View } from 'react-native';
import { Stack } from 'expo-router';

import { useTranslation } from '@hooks/use-i18n';
import { CustomButton, CustomSafeAreaView, CustomText } from '@components';

import { styles } from './login.styles';

type LoginProps = {
  theme: MD3Theme;
};

const Login: FC<LoginProps> = ({ theme }) => {
  const { translate } = useTranslation(require('./login.translations.json'));
  const [text, setText] = useState('');

  return (
    <CustomSafeAreaView isSolidBackground={true}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.greetContainer}>
              <CustomText
                text={translate('welcome_back')}
                color="primary"
                type="title"
              />
              <CustomText
                text={translate('greet')}
                color="accent"
                type="body"
              />
            </View>
            <Image
              source={require('@assets/images/login-illustration.png')}
              style={styles.image}
            />
          </View>
          <View style={{ gap: 16 }}>
            <TextInput
              mode="outlined"
              label={translate('user')}
              value={text}
              onChangeText={(text) => setText(text)}
            />

            <TextInput
              mode="outlined"
              label={translate('password')}
              value={text}
              onChangeText={(text) => setText(text)}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />

            <CustomButton
              text={translate('forgot_password')}
              type="tertiary"
              onPress={() => {}}
              align="flex-end"
            />

            <CustomButton
              text={translate('sign_in')}
              type="primary"
              onPress={() => {}}
            />
            <CustomButton
              text={translate('sign_up')}
              type="secondary"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default withTheme(Login);
