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
        <Toaster />
        <section className="flex flex-col items-center">
          <div className="my-12 ">
            <h1 className="font-bold text-xl">Simple CRUD</h1>
          </div>
          <form onSubmit={handleAddUser} className="">
            <input className="border border-gray-500 rounded-md mb-2 " type="text" name="name" id="" /> <br />
            <input className="border border-gray-500 rounded-md mb-2 " type="email" name="email" id="" /> <br />
            <input className="border flex mx-auto border-gray-500 cursor-pointer hover:bg-gray-200  px-2 rounded-md " type="submit" value="add user" />
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
