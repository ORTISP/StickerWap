import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '50%',
  },
  categorySection: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  filterContainer: {
    width: '100%',
    flex: 1,
    marginTop: 10,
    backgroundColor: '#F2F2F2',
    marginBottom: 10,
    borderRadius: 12,
  },
  categoryAbreviation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
    fontFamily: 'Raleway',
    marginLeft: 10,
    marginBottom: 3,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Raleway',
    marginBottom: 10,
  },
  filterSection: {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#F2F2F2',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10,
    color: 'grey',
    fontFamily: 'Raleway',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  stickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sticker: {
    width: 55,
    height: 55,
    margin: 5,
    borderRadius: 12,
    borderColor: '#04B600',
  },
  stickerTitle: {
    fontSize: 24,
    fontFamily: 'Raleway',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  stickerCount: {
    fontSize: 12,
    textAlign: 'center',
    marginLeft: 34,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#04B600',
  },
  bigHeader: {
    fontSize: 40,
    fontWeight: '800',
    color: '#F2F2F2',
    textAlign: 'left',
    margin: 20,
    marginTop: 40,
    width: '100%',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontFamily: 'Raleway',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: 120,
    borderRadius: 20,
  },
});

export default styles;
