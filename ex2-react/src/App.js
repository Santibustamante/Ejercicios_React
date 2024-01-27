import Arrow from "./Arrow/Arrow"
import './App.css';
import Reviews from './Components/Ex 2/Reviews/Reviews';

const {review} = Arrow.reviews


function App() {
  return (
    <>
      <Reviews reviews={Arrow.review}></Reviews>
    </>
  );
}

export default App;
