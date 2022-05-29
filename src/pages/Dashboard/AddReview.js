import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        const rating = {
            userName: user.displayName,
            userImage: data.picture,
            userReview: data.review,
            userRatings: data.ratings,
        }


        fetch('https://ancient-ravine-57330.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(data => {
                toast.info("Thanks for your review");
                console.log(data);
            })

    }

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col	justify-center items-center'>

                {/* image  */}
                <div className="form-control w-full max-w-lg">
                    <input {...register("picture", {
                        required: {
                            value: true,
                            message: "Picture field is required "
                        }
                    })}
                        type="text" placeholder="URL" className="input input-bordered w-full max-w-lg" />
                    <label className="label">
                        {errors.picture?.type === 'required' && <span className=" text-red-400 label-text-alt">{errors.picture.message}</span>}
                    </label>
                </div>

                {/* ratings  */}
                <input  {...register("ratings", {
                    required: {
                        value: true,
                        message: "Ratings field is required"
                    },
                    min: {
                        value: 1,
                        message: 'Type at least 1'
                    },
                    max: {
                        value: 5,
                        message: 'Type a maximum of 5'
                    }
                })} type="number" placeholder='Your ratings' className="input input-bordered input-warning w-full max-w-lg mt-3" />
                <label className="label">
                    {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    {errors.ratings?.type === 'min' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                    {errors.ratings?.type === 'max' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                </label>

                {/* review  */}
                <textarea type="text" {...register("review", {
                    required: {
                        value: true,
                        message: "Review field is required"
                    }
                })} placeholder='Your review' className="input input-bordered input-warning w-full max-w-lg mt-3"></textarea>
                <label className="label">
                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                </label>
                <input type="submit" value="Submit" className='btn btn-outline w-2/4 mt-3' />
            </form>
            <ToastContainer />
        </section>
    );
};

export default AddAReview;
