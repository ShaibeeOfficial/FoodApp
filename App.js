import React from 'react'
import Navigation from './src/reusableComponents/Stack'
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <Navigation />
  </Provider>
  )
}

export default App