
import { Provider } from 'react-redux';
import './App.css';
import { Post, PostContainer, Pagination } from './Components';
import { dbWorker } from './Workers/dbWorker.ts';
import store from "./redux/store.js"

function App() {
  var databseWorker = new dbWorker();
  databseWorker.getPosts();
  databseWorker.getPagesCount();
  databseWorker.getAllTags();
  // databseWorker.getJson(process.env.PUBLIC_URL + "/localData/postsdb.json");

  return (
    <Provider store={store}>
      <div className="App">
        <PostContainer dbWorker={databseWorker} />
        
      </div>
    </Provider>

  );
}

export default App;
