import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import Users from "./Users";

const MakeAdmin = () => {
  const { data, isLoading, refetch } = useQuery("allusers", () =>
    fetch("https://bioji-metal-server-shakib633.vercel.app/allUsers", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Buyer Name</th>
              <th>Buyer Email Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((userData) => (
              <Users
                key={userData._id}
                userData={userData}
                refetch={refetch}
              ></Users>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
