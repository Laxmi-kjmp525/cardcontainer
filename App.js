import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from './movie.json';
import './App.css';
function App() {
  
  return (
    <div className="App">
     <Header />
     <div className="main">
      {
        movies.map((elements) => {
            return (
          <Movie
           title={elements.Title} 
           year={elements.Year}
           img={elements.Poster} />
            )
        })
      }
      
     </div>
   </div>
  );
}

export default App;
