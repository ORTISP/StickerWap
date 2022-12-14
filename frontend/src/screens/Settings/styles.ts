import { StyleSheet } from 'react-native';

import { green, screenHeight } from 'styles/theme';

const styles = StyleSheet.create({
  formContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
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
  signoutbuttonContainer: {
    marginTop: screenHeight * 0.03,
    width: '100%',
    marginBottom: screenHeight * 0.04,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Raleway',
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Raleway',
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    marginLeft: 10,
  },
  dropdown: {
    marginBottom: screenHeight * 0.03,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    height: screenHeight * 0.05,
  },
  subtitle: {
    color: green,
    marginBottom: screenHeight * 0.02,
    fontSize: screenHeight * 0.05,
    fontFamily: 'Raleway-Bold',
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
