import "./App.css";
import "./assets/css/style.css";
import Card from "./components/CardPayment";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Card
        namePage={"Detalhes de Pagamento"}
        name={"Nome (apelido do cartão)"}
        numberCard={"Número do Cartão"}
        infoCheck={"Salve meu cartão para compras futuras"}
        btnSubmitName={"Pagar agora"}
      />
      <Card
        namePage={"Salvar meu cartão"}
        name={"Nome ou apelido"}
        numberCard={"Número do Cartão"}
        infoCheck={
          "Garanto que verifiquei meus dados & li os termos e condições."
        }
        btnSubmitName={"Salvar"}
      />
    </>
  );
};

export default App;
