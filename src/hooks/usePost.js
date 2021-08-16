import { useState } from "react";
import axios from 'axios';

function usePost() {

    const [postData, setPostData] = useState({
        pending: false,         // padding para indicar se o request está ...?
        data: undefined,        // ficará undefined pq não tem nenhum dado ainda
        error: undefined,

    });


    const execute = ({ data }) => {  // data guardará os dois registros titulo e autor, recebidas de handleSubmit App.js                   
        setPostData({
            pending: true,
            data: undefined,
            error: undefined,
        });

        axios
            .post('http://localhost:5000/posts', data)   // data guardará os dois registros titulo e autor, recebidas de handleSubmit App.js
            .then(response => {
                setPostData({
                    pending: false,
                    data: response.data,
                    error: undefined,
                });
                console.log(response.data);
            })
            .catch(error => {
                setPostData({
                    pending: false,
                    data: undefined,
                    error: error.message
                })
            })
    }

    return { ...postData, execute }
}

export default usePost;