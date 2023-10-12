import { React } from 'react';

import { MyProvider,DialogProvider } from './views/screens/MyContext';
import MainApp from './main';


const App = () => {
  return (<DialogProvider><MainApp /></DialogProvider>);
};

export default App