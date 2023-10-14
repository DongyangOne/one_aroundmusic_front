// ** React Imports
import { React } from 'react';

// ** Context Imports
import { AuthProvider } from './src/context/AuthContext';

// ** Component Imports
import MainApp from './Main';

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;
