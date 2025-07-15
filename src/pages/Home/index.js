import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import { useState } from "react";

function Home() {
  
  // let nomeDigitado = '';

  function pegarNome(event ){
    console.log(event.target.value) /*pegar valor digitado*/
    // nomeDigitado = event.target.value;
    setNome(event.target.value)
  }

  //Hook = gancho -> useState
  const [nome, setNome] = useState();

  
  return (
    <div>
      <Header />
      <Banner image="inicio" />

      <Container>

        <input
          type="text"
          placeholder="Nome"

          onChange={pegarNome}
          />
          <h2>{nome}</h2>




        {/* {categories.map((category, index) => (
          <Category category={category}>
            {filterCategory(index).map((video) => (
              <Card id={video.id} key={video.id} />
            ))}
          </Category>
        ))} */}
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
