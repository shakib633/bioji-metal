import React from "react";
import { useEffect, useState } from "react";
import SingleReview from "./SingleRiview";

const Rateing = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://bioji-metal-server-shakib633.vercel.app/rating")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(review);
  return (
    <section>
      <h2 className="text-center text-5xl font-bold">Reviews</h2>
      <div className="inline grid gap-x-9	sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {review.map((data) => (
          <SingleReview key={data._id} data={data}></SingleReview>
        ))}
      </div>
    </section>
  );
};

export default Rateing;
