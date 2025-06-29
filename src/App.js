import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
function App() {
  return (
    <div>
      <Header />
      <Banner image="inicio"/>

      <Container>
      <h1>Hello World</h1>
      <p>Olá Mundo! Estou aprendendo React JS</p>
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
