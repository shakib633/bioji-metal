import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = ({ userData, refetch }) => {
  const { email, role } = userData;
  const makeAdmin = () => {
    fetch(`https://bioji-metal-server.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th></th>
      <td>{userData.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-outline">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-outline btn-error">Remove User</button>
      </td>
      <ToastContainer />
    </tr>
  );
};

export default Users;
