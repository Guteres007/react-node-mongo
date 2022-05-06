import {useEffect, useState} from 'react';
import './App.css';
import {get} from "./database";
import Post from './components/post'


function App() {
  const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
  
  useEffect( () => {
    const fetchData = async () => {
      let response = await get('/')
      setTitle(response.title)
      setPosts(response.posts)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <div>
        {title}
      </div>
      <div>
        {
            posts.map((post, i) => {
              return (<Post key={i} post={post} />)
            })
        }
      </div>
      
    </div>
  );
}

export default App;
