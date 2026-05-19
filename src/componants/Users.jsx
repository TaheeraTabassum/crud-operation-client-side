import { useEffect, useState } from "react"
import toast from "react-hot-toast";


export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    const handleDelete = _id =>{
        console.log('DELETE', _id );
        fetch(`http://localhost:5000/users/${_id}`, {
            method:  'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                toast('user deleted successfully !🗑️')
            }
        })
        
    }
  return (
    <div className='text-white'>
        <h1>Total Users : {users.length}</h1>
        <div className="">
            {
                users.map(user=>(
                    <div className=" " key={user._id}>
                       <div>
                         <p className="text-rose-400">{user.name}</p>
                        <p>{user.email}</p>
                       </div>
                       <button onClick={()=>handleDelete(user._id)} className="">❌</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
''