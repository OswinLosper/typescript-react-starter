import { connect } from 'react-redux';

/* Import actions */

/* Import thunks */

/* Import main component */

import HomePage from './component';

const mapStateToProps = ({
  sharedReducer,
}) => {
  return {
    sharedReducer,
  };
};

export const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(() => { });
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onLoad: () => dispatchProps.onLoad(ownProps),
});

const WrappedPage = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(HomePage);

export default WrappedPage;
