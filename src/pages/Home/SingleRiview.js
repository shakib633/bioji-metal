import React from 'react';

const SingleReview = ({ data }) => {
    const { userName, userImage, userReview, userRatings } = data;
    return (
        <section className='pt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">

                <div class="card-body">
                    <div className="avatar">
                        <div className="w-32 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={userImage} alt="" />
                        </div>
                    </div>
                    <h2 class="card-title">{userName}</h2>
                    <p><span className='font-bold'>Review:</span> {userReview}</p>
                    <p><span className='font-bold'>Ratings:</span> {userRatings}</p>
                </div>
            </div>
        </section>
    );
};

export default SingleReview;