import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  messagingscreen: {
    flex: 1,
    marginTop: 20,
  },
  noMessages: {
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '200',
    margin: 20,
  },
  messagingscreenTitle: {
    fontFamily: 'Raleway',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    marginLeft: 20,
  },
  messaginginputContainer: {
    width: '100%',
    minHeight: 100,
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messaginginput: {
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    fontFamily: 'Raleway',
  },
  mmessageWrapper: {
    alignItems: 'flex-start',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  mmessage: {
    maxWidth: '50%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
    fontFamily: 'Raleway',
    backgroundColor: '#F2F2F2',
  },
  cchat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: 80,
    marginBottom: 10,
  },
  cusername: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Raleway-Bold',
  },
  cmessage: {
    fontSize: 14,
    opacity: 0.7,
    fontFamily: 'Raleway',
  },
  crightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  ctime: {
    opacity: 0.5,
    fontFamily: 'Raleway',
  },
});
