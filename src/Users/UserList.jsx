import React from "react"

let UserList =(props)=>{

  let selUser=(user)=>{
    props.propmethod(user)
  }

 
  return  <div className="row">
        {/* <pre>{JSON.stringify(props)}</pre> */}
        <div className="col-md-8">
        <h6>UserList</h6>
        <table className="table table-hover">
          <thead className="bg-primary text-white">
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
              </tr>

          </thead>
          <tbody>
              {
                  props.users.map((user) => {
                      // rome-ignore lint/a11y/useKeyWithMouseEvents: <explanation>
                    return <tr key={user.id} onMouseOver={selUser.bind(this, user)}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                      </tr>
                  })
              }
          </tbody>
      </table>
  </div>
</div >
}
export default UserList