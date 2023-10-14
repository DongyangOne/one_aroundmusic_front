import { React } from 'react';

import { AuthProvider } from './context/AuthContext';
import MainApp from './main';

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;
