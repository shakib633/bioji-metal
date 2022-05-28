import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = ({ data }) => {
    const { name, total,minimum, picture, price, _id } = data;
    const navigate = useNavigate();
    const navigateToUpdate = (id) => {
        navigate(`/dashboard/manageProducts/${id}`)
    }
    console.log(data);
    return (
        <tr>
            <th></th>
            <td><div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={picture} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{total}</td>
            <td>{minimum}</td>
            <td>{price}</td>
            <td><button className="btn btn-outline btn-error">Delete</button></td>
            <td><button className="btn btn-outline" onClick={() => navigateToUpdate(_id)}>Update</button></td>

        </tr>
    );
};

export default AllProducts;