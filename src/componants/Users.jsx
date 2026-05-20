import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (_id) => {
    console.log("DELETE", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast("user deleted successfully !🗑️");
        }
      });
  };

  return (
    <div className="flex  flex-col items-center my-6">
      <Toaster />
      <h1 className="font-semibold">Total Users : {users.length}</h1>
      <div className="grid grid-cols-4 gap-18 my-6 ">
        {users.map((user) => (
          <div
            className="space-y-2 border py-2 px-4 rounded-xl bg-blue-50"
            key={user._id}
          >
            <div className="">
              <p className="">Name : {user.name} </p>
              <p>Email : {user.email}</p>
            </div>
            <div className="flex justify-between">
              <Link>
                <button
                  className="border border-gray-300 rounded-md p-1"
                  onClick={() => {
                    fetch(`http://localhost:5000/users/${user._id}`)
                      .then((res) => res.json())
                      .then((data) => {
                        setSelectedUser(data);
                        setIsOpen(true);
                      });
                  }}
                >
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(user._id)}
                className="p-1 border border-gray-300 rounded-md"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
      {isOpen && selectedUser && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Update User</h2>

              <button onClick={() => setIsOpen(false)} className="text-xl">
                ❌
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>

                <input
                  type="text"
                  defaultValue={selectedUser.name}
                  className="w-full border rounded-lg p-2 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>

                <input
                  type="email"
                  defaultValue={selectedUser.email}
                  className="w-full border rounded-lg p-2 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-300 text-white py-2 rounded-lg"
              >
                Update User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
