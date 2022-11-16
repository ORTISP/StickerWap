import { StyleSheet } from 'react-native';
import { green, screenHeight } from 'styles/theme';

const styles = StyleSheet.create({
  formContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '15%',
  },
  label: {
    fontSize: screenHeight * 0.02,
    marginBottom: screenHeight * 0.012,
    marginTop: screenHeight * 0.012,
    fontFamily: 'Raleway',
  },
  error: {
    color: 'red',
    fontSize: screenHeight * 0.02,
    marginBottom: screenHeight * 0.012,
    marginTop: screenHeight * 0.012,
    fontFamily: 'Raleway',
  },
  subtitle: {
    color: green,
    marginBottom: screenHeight * 0.03,
    fontSize: screenHeight * 0.05,
    fontFamily: 'Raleway-Bold',
  },
  buttonText: {
    fontSize: screenHeight * 0.02,
    fontFamily: 'Raleway',
  },
  dropdown: {
    marginBottom: screenHeight * 0.03,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    height: screenHeight * 0.26,
  },
  dropStyle: {
    fontSize: screenHeight * 0.018,
    marginBottom: screenHeight * 0.005,
    marginTop: screenHeight * 0.005,
    borderWidth: 0.5,
    borderRadius: 4,
    fontFamily: 'Raleway',
    width: '100%',
    textAlign: 'left',
  },
  input: {
    fontSize: screenHeight * 0.018,
    marginBottom: screenHeight * 0.005,
    marginTop: screenHeight * 0.005,
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 4,
    fontFamily: 'Raleway',
  },
  buttonContainer: {
    marginTop: screenHeight * 0.04,
    width: '100%',
  },
  createAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { styles };
