import { connect } from 'react-redux';

import Main from './main';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Main);