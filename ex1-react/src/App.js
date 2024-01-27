import './App.css';
import Gallery from './Components/Ex1/Gallery/Gallery'
import Header from './Components/Ex1/Header/Header'
import Heading from './Components/Ex1/Heading/Heading'
import Promotion from './Components/Ex1/Promotion/Promotion'
import Array from "./Array/Array";

const { header, promotion, heading, gallery } = Array

function App() {
  return (
    <>
            <Header header={header}></Header>
            <Promotion promotion={promotion}></Promotion>
            <Heading heading={heading}></Heading>
            <Gallery gallery={gallery}></Gallery>    
  </>
  );
}

export default App;
