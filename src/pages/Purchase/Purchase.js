import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [quantity, setQuantity] = useState("");
  const [user] = useAuthState(auth);
  const name = user.displayName;
  const email = user.email;

  // load parts data
  const { id } = useParams();
  const [part, setPart] = useState([]);
  console.log(part);
  const avilableQuantity = part.total;
  const minimumQuantity = part.minimum;

  useEffect(() => {
    const url = ` https://bioji-metal-server-shakib633.vercel.app/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);

  // form data
  const onSubmit = (data) => {
    const price = part.price * parseInt(data.quantity);
    const purchase = {
      productName: part.name,
      productPrice: price,
      buyerEmail: data.email,
      buyerName: data.name,
      buyerAddress: data.address,
      productQuantity: data.quantity,
    };

    console.log(purchase);
    fetch("https://bioji-metal-server-shakib633.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.info("Data submitted successfully");
      });
  };

  // quantity input
  const quantityInput = (event) => {
    const inputValue = event.target.value;
    setQuantity(inputValue);
  };

  let displayError = "";
  if (quantity < minimumQuantity) {
    displayError = (
      <p className="text-red-500 mt-2">
        You must place a minimum of {minimumQuantity} pcs
      </p>
    );
  }
  if (quantity > avilableQuantity) {
    displayError = (
      <p className="text-red-500 mt-2">
        You cannot order more than {avilableQuantity}
      </p>
    );
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="grid flex-grow card  rounded-box lg:w-2/4 md:w-full sm:w-full">
          <div className="card w-4/5 bg-base-100 shadow-xl mb-16 mt-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <figure>
              <img src={part.picture} alt="" />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title">
                <span className="font-bold">Name:</span>
                {part.name}
              </h2>
              <p>
                <span className="font-bold">Description:</span> {part.about}
              </p>
              <p>
                <span className="font-bold">Available Quantity:</span>{" "}
                {part.total}
              </p>
              <p>
                <span className="font-bold">Minimum Order Quantity:</span>{" "}
                {part.minimum}
              </p>
              <p>
                <span className="font-bold">Price:</span> {part.price}
              </p>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid  flex-grow card rounded-box lg:w-2/4 md:w-full sm:w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col	justify-center items-center"
          >
            {/* name  */}
            <input
              {...register("name")}
              type="text"
              value={name}
              readOnly
              className="input input-bordered input-warning w-full max-w-lg mt-3"
            />

            {/* email  */}
            <input
              {...register("email")}
              type="email"
              value={email}
              readOnly
              className="input input-bordered input-warning w-full max-w-lg mt-3"
            />

            {/* address  */}
            <input
              {...register("address", {
                required: {
                  value: true,
                  message: "Address field is required ",
                },
              })}
              type="text"
              placeholder="Please enter your address"
              className="input input-bordered input-warning w-full max-w-lg mt-3"
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>

            {/* phone number  */}
            <input
              {...register("phone_number", {
                required: {
                  value: true,
                  message: "Phone Number field is required",
                },
                minLength: {
                  value: 11,
                  message: "Phone number must be 11 characters or longer",
                },
              })}
              type="number"
              placeholder="Please enter phone number"
              className="input input-bordered input-warning w-full max-w-lg mt-3"
            />
            <label className="label">
              {errors.phone_number?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.phone_number.message}
                </span>
              )}
              {errors.phone_number?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.phone_number.message}
                </span>
              )}
            </label>

            {/* quantity  */}
            <input
              {...register("quantity")}
              type="number"
              name="quantity"
              id=""
              className="input input-bordered input-warning w-full max-w-lg mt-3"
              onChange={quantityInput}
            />
            {displayError}

            <input
              type="submit"
              value="Submit"
              className="btn btn-outline w-2/4 mt-3"
              disabled={
                quantity > avilableQuantity && quantity < minimumQuantity
              }
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Purchase;
