import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import ComponentOneChild from './components/C1Child1'
import ComponentTwoChild from './components/C1Child2'

function App() {

  return (
    <>
      <h1>Welcome to my first react web page</h1>
      <ComponentOne/>
      <ComponentTwo/>
      
    </>
  );
}

export default App;
