import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Quotation from "./components/Quotation";
import Resolution from "./components/Resolution";
import Footer from "./components/Footer";
import CalculationResult from "./components/CalculationResult";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Quotation />
        <Resolution />
        <CalculationResult />
      </main>
      <Footer />
    </div>
  );
}

export default App;
