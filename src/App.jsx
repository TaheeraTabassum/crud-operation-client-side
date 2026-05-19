// import { Outlet } from "react-router";

import toast, { Toaster } from "react-hot-toast";
import Users from "./componants/Users";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("✅ user added successfully");
        }
      });
  };

  return (
    <>
    <div>
     <Toaster/>
      <section className="">
       
        <h1>Simple CRUD</h1>
        <form onSubmit={handleAddUser} className="">
          <input  type="text" name="name" id="" /> <br />
          <input type="email" name="email" id="" /> <br />
          <input type="submit" value="add user" />
        </form>
      </section>
      
      <div>
       <Users></Users>
      </div>
      </div>
    </>
  );
}

export default App;
