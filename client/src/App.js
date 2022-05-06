import {useEffect, useReducer, useState} from 'react';
import './App.css';
import {get, post} from "./database";
import Post from './components/post'


function App() {
    const [posts, setPosts] = useState([])
    const [formData, setFormData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            let response = await get('/posts')
            setPosts(response)
        }
        fetchData()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await post('/post/save', formData)
        setPosts(response)
        setFormData({})
    }

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="App">

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={'title'} onChange={handleChange} name={'title'}/>
                    <input type="text" placeholder={'description'} onChange={handleChange} name={'description'}/>
                    <button type={"submit"}>Odeslat</button>
                </form>
            </div>
            <div>
                {
                    posts.map((post, i) => {
                        return (<Post key={i} post={post}/>)
                    })
                }
            </div>

        </div>
    );
}

export default App;
