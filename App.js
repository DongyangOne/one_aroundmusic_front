import { React } from 'react';

import { AuthProvider } from './src/context/AuthContext';
import MainApp from './Main';

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;
