import { useEffect, useState } from "react";
import Featured from "./Featured";
import Header from "./Header";
import Hero from "./Hero";
import api from "../utils/Api";
import Description from "./Description";
import Contacts from "./Contacts";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getProducts()
      .then((cardsData) => {
        console.log(cardsData);
        setCards(cardsData.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="root">
      <Header />
      <main className="main">
        <Hero />
        <Featured cards={cards.slice(0, 5)} />
        <Description></Description>
        <Contacts></Contacts>
      </main>
    </div>
  );
}

export default App;
