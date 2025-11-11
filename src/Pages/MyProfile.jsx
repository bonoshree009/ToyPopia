import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateuser, setuser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateuser({ displayName: name, photoURL: photo })
      .then(() => {
       
        setuser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
        <title>My Profile</title>
      <h1 className="text-2xl font-bold mb-4 text-pink-500">My Profile</h1>

      <div className="flex flex-col items-center mb-4">
        <img src={photo || "https://i.ibb.co/0FqkJbg/toy-robot.jpg"}alt={name} className="w-32 h-32 rounded-full mb-2"/>
          <p className="text-pink-600 font-semibold text-xl">{user?.displayName}</p>
        <p className="text-gray-700 font-semibold">{user?.email}</p>
       
      </div>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input type="text"placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered"/>
        <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} className="input input-bordered"/>
        <button type="submit" disabled={loading} className="btn bg-blue-400 text-white" >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
