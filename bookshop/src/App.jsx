//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import fantasy from "./data/books/fantasy.json";
import history from "./data/books/history.json";
import horror from "./data/books/horror.json";
import romance from "./data/books/romance.json";
import scifi from "./data/books/scifi.json";

const allTheBooksArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];

function App() {
    return (
        <div className="App">
            <MyNav brand="EpiBooks!" />
            <Welcome title="libreria epica!" subtitle="Ma quanti bei libri!" />
            <BookList booksArray={allTheBooksArr} />
            <MyFooter className="container-md" />
        </div>
    );
}

export default App;
