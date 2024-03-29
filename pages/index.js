import Nav from "../components/Nav";
import ContentLayout from "../components/ContentLayout";
import SessionWrapper from "../components/SessionWrapper";

function App() {
  return (
    <div>
      <Nav></Nav>
      <ContentLayout>
        <SessionWrapper />
      </ContentLayout>
    </div>
  );
}

export default App;
