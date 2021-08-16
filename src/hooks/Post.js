import React, { useState } from 'react'
import '../App.css';
import usePost from './usePost';
import Sanitized from "react-sanitized";

function Post() {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [creator, setCreator] = useState('');
    const [tags, setTags] = useState('');
    const { pending, data, error, execute } = usePost() // dados que esta exportando de src/hooks/usePost.js

    const handleSubmit = e => { // = á function handleSubmit(e){}
        e.preventDefault();
        //console.log({titulo, autor});// inserido dentro de {} para ficar formato json [console.log(titulo, autor);]
        //no lugar de console.log inserir o execute de src/hooks/usePost.js
        execute({ data: { title, message, creator, tags } });

    }


    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={Sanitized.title} onChange={(e) => setTitle(e.target.value)} />
                    </label>

                    <label>
                        Creator:
                        <input type="text" value={Sanitized.creator} onChange={(e) => setCreator(e.target.value)} />
                    </label>

                    <label>
                        Title:
                        <input type="text" value={Sanitized.tags} onChange={(e) => setTags(e.target.value)} />
                    </label>

                    <label>
                        Message:
                        <input type="text" value={Sanitized.message} onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <input type="submit" value={pending ? 'Loading...' : 'Submit'} disabled={pending} />
                </form>

                {/* {error && <span>Somthing went wrong</span>}
                {data && <span>Sucess! ... {JSON.stringify(data)}</span>} */}


            </header>
        </div>
    );
}

export default Post;
