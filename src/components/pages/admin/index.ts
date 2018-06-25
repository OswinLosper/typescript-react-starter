import { connect } from 'react-redux';

/* Import actions */

/* Import thunks */

/* Import main component */

import PageComponent from './component';

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
)(PageComponent);

export default WrappedPage;
