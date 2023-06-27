'use client';

import { StoreProvider } from 'easy-peasy';
import withReduxStore from '../../lib/with-redux-store';

function StoreContext({ reduxStore, children }) {
  return <StoreProvider store={reduxStore}>{children}</StoreProvider>;
}

export default withReduxStore(StoreContext);
