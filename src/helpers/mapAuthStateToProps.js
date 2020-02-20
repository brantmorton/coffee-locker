const mapAuthStateToProps = state => ({
  auth: state.auth.authObject
});

export default mapAuthStateToProps;
