import { React } from 'react';

import { AuthProvider } from './context/AuthContext';
import MainApp from './Main';

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;
