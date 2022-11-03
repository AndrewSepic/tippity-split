import './App.css';
import Nav from './components/Nav';
import ContentLayout from './components/ContentLayout';
import EmployeeListing from './components/EmployeeListing';
import SessionWrapper from './components/SessionWrapper';

function App() {

  return (
    <div>
      <Nav></Nav>

      <ContentLayout>

        <SessionWrapper/>

        <EmployeeListing/>

      </ContentLayout>

    </div>

  );
}

export default App;
