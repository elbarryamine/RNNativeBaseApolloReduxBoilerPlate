import React, {ReactNode} from 'react';
import store, {persistor} from '@shared/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export default function ReduxProvider({children}: {children: ReactNode}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
