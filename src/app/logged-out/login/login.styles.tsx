import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  imageContainer: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetContainer: {
    width: '100%',
    gap: 8,
  },
  image: {
    marginVertical: 32,
  },
});

export { styles };
