import React, {useState,setname} from 'react'
import {categoriesData} from '../data/categories'

function CategoryPage() {
    const [categories, setcategories] = useState(categoriesData);

    const deleteCategories = (id) => {
        let filteredCategories = categories.filter(x => x.id != id);
        setcategories([...filteredCategories]);
    }

    const updateCategories = (id) => {
        
    }

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')


    const add = () => {

        let randomGenerateId = Math.floor(Math.random() * 99999)

        let newCategories = {
            id: randomGenerateId,
            name: name,
            description: description
        }

        setcategories([...categories, newCategories])
    }

    return (
    <>
        <div>
            <label>Name : </label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>

        <div>
            <label>Description : </label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>

        <div>
            <button onClick={() => add()}>ADD</button>
        </div>


    <h1> Categories Lenght : {categories.length}</h1>

    <button onClick={() => setcategories([])}> Remove All</button>

        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Transactions</th>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => deleteCategories(item.id)} style={{cursor:'pointer', background:'red', color:'#FFF', border:'0', padding:'5px 20px'}}>Delete</button>
                                <button onClick={() => updateCategories(item.id)} style={{cursor:'pointer', background:'#41894f', color:'#FFF', border:'0', padding:'5px 20px'}}>Düzenle</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>

        </table>
    </>
  )
}

export default CategoryPage