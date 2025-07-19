import React from 'react';

import SignUP from './component/SignUp';
import Toggle from './component/Toggle';  
import './App.css';
import FAQS from './component/FAQ/FAQS';
import UseEffectExample from './component/UseEffectExample';
import DataFetch from './component/CustomHooks/Datafetch';

function App() {
  return (
    <div>
      <SignUP />
      <Toggle />
      <FAQS />
      <UseEffectExample />
      <DataFetch />
    </div>
  );
}

export default App;
