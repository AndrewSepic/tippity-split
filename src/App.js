import './App.css';
import Nav from './components/Nav';
import ContentLayout from './components/ContentLayout';
import SessionWrapper from './components/SessionWrapper';
import { useState, useEffect } from 'react';

function App() {

  const [response, setResponse] = useState();

  async function callBackendAPI() {
    const response = await fetch('/express_backend');
    const body = await response;

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    setResponse(body);
  };

  return (
    <div>
      <Nav></Nav>

      <ContentLayout>

        <SessionWrapper/>

      </ContentLayout>

    </div>

  );
}

export default App;
