import React, {useEffect, useState} from 'react'

function AlbumListPage() {

    const [albums, setalbums] = useState([]);

    console.log("1");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data =>{
            setalbums(data);
        })
        .catch(err => {
            console.log('err', err)
        })
        //.then(response => console.log('response', response)) -> console basmak için
    }, [])


    return (
    <>
        <table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {
                    albums && albums.map((item, key) =>{
                        return <tr key={item.id}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                    })
                }
            </tbody>

        </table>
    </>
  )
}

export default AlbumListPage