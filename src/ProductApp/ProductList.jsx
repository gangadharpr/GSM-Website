import React, { useState } from 'react'

let ProductList = (props) => {
    const [searchName, setSearchName] = useState("")
    const [foundUser, setFoundUser] = useState(props.userData.data.users)

    let getData = (e) => {
        const keyword = e.target.value
        console.log(keyword)
        setSearchName(keyword)
    };

    let filter = () => {
        if (searchName !== "") {
            const result = foundUser.filter((singleData) => {
                return singleData.firstName.toLowerCase().startsWith(searchName.toLowerCase())
            })
            setFoundUser(result)
        }  
    }

    let refresh = () => {
        setSearchName("")
        setFoundUser(props.userData.data.users)
    };

    let selectedUser = (user) => {
        console.log(user.id);
        props.selprofile(user);
    };

    let handleClick = () => {
        alert('Please fill the field')
    }

    return (
        <>
            <div>Product List</div>
            <pre>{JSON.stringify(props)}</pre>
            <div className="container">
                <div className="row">
                    <input
                        type="search"
                        value={searchName}
                        placeholder="Filter By Name"
                        onChange={getData}
                        onFocus={refresh}
                        required   
                    />
                    <input type="button" value='search' onClick={searchName === "" ? handleClick : filter} /><br/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <table className='table table-hover'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody className='bg-light '>
                                {foundUser.length > 0 ? (
                                    foundUser.map((user) => {
                                        return (
                                            <tr key={user.id} onClick={() => selectedUser(user)}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.city}</td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={4}><h1>No results found!</h1></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList
