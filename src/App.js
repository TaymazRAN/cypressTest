import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
        <PostList />
      </header>
    </div>
  );
}

export default App;
