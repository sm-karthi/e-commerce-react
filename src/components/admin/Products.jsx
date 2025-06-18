import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Products() {

    let [product, setProduct] = useState([]);

    let getData = async () => {

        try {
            let response = await axios.get("https://6850f0628612b47a2c07fce0.mockapi.io/products")
            setProduct(response.data);
        } catch (error) {
            alert("Something went wrong");
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="p-6">

            <div className='flex justify-end mt-4 mr-4 sm:mr-24'>
                <Link
                    to={"/admin/create-product"}
                    className='bg-blue-500 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition duration-150 shadow-md'>
                    Create product
                </Link>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-full border-collapse border bg-white border-gray-400">

                    <thead>
                        <tr className="bg-gray-200 ">
                            <th className="tableBox ">Title</th>
                            <th className="tableBox ">Description</th>
                            <th className="tableBox ">Image</th>
                            <th className="tableBox ">Size / Price</th>
                            <th className="tableBox ">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.map((item) => (
                                <tr>
                                    <td className="tableBox">{item.title}</td>
                                    <td className="tableBox w-60">{item.description}</td>
                                    <td className="tableBox w-40">
                                        <img src={item.imageUrl} alt={item.title} draggable="false" />
                                    </td>
                                    <td className="tableBox"></td>
                                    <td className="tableBox">
                                        <div className="flex flex-wrap gap-2 items-center justify-center">
                                            <Link
                                                to={`/admin/product/${item.id}`}
                                                className="bg-blue-500 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition duration-150 shadow-md">
                                                View
                                            </Link>

                                            <Link
                                                to={`/admin/edit/${item.id}`}
                                                className="bg-green-500 text-white px-3 py-1 rounded font-semibold hover:bg-green-600 transition duration-150 shadow-md">
                                                Edit
                                            </Link>

                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-700 transition duration-150 shadow-md cursor-pointer">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );

}

export default Products;
