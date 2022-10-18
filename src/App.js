import './App.css';
import Nav from './components/Nav';
import ContentLayout from './components/ContentLayout';
import EmployeeListing from './components/EmployeeListing';

function App() {

  return (
    <div>
      <Nav></Nav>

      <ContentLayout>

        <EmployeeListing/>

      </ContentLayout>

    </div>

  );
}

export default App;
