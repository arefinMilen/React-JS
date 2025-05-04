import React from 'react';

import SignUP from './component/SignUp';
import Toggle from './component/Toggle';  
import './App.css';
import FAQS from './component/FAQ/FAQS';
import UseEffectExample from './component/UseEffectExample';

function App() {
  return (
    <div>
      <SignUP />
      <Toggle />
      <FAQS />
      <UseEffectExample />
    </div>
  );
}

export default App;
