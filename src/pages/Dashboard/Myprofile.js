import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const imageRef = useRef("");
  const companyRef = useRef("");
  const locationRef = useRef("");
  const phoneRef = useRef("");
  const handleUpdateInfo = (event) => {
    event.preventDefault();
    const info = {
      name: user.displayName,
      email: user.email,
      picture: imageRef.current.value,
      education: companyRef.current.value,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
    };

    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // my profile
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/user/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [update]);
  console.log(user.email);
  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <div class="card w-96 bg-base-100 shadow-xl ml-1">
        <div class="card-body">
          <div className="avatar">
            <div className="w-48 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={update[0]?.picture} />
            </div>
          </div>
          <p>
            <span className="font-bold">Name:</span> {update[0]?.name}
          </p>
          <p>
            <span className="font-bold">Email:</span> {update[0]?.email}
          </p>
          <p>
            <span className="font-bold">Phone: </span> {update[0]?.phone}
          </p>
          <p>
            <span className="font-bold">Company Name:</span>{" "}
            {update[0]?.education}
          </p>
          <p>
            <span className="font-bold">Location:</span> {update[0]?.location}
          </p>
        </div>
      </div>

      <div>
        <form
          className="flex flex-col items-center"
          onSubmit={handleUpdateInfo}
        >
          <h2 className="text-5xl font-bold mb-5">Update Profile</h2>
          <input
            ref={imageRef}
            type="text"
            placeholder="Image URL"
            className="input w-full max-w-lg mb-3 mt-3"
            required
          />
          <input
            ref={companyRef}
            type="text"
            placeholder="Company Name"
            className="input w-full max-w-lg mb-3"
            required
          />
          <input
            ref={locationRef}
            type="text"
            placeholder="Location"
            className="input w-full max-w-lg mb-3"
            required
          />
          <input
            ref={phoneRef}
            type="number"
            placeholder="Phone Number"
            className="input w-full max-w-lg mb-3"
            required
          />
          <input
            className="btn btn-outline w-2/4"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </section>
  );
};

export default MyProfile;
