import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { setProducts, deleteProducts } from "../../reducers/Product-reducer";

function Products() {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.app)

    let getData = async () => {

        try {
            let response = await axios.get("https://6850f0628612b47a2c07fce0.mockapi.io/products")
            dispatch(setProducts(response.data))
        } catch (error) {
            alert("Something went wrong");
        }
    }

    useEffect(() => {
        if (data.products.length === 0) {
            getData();
        }

    }, []);


    let deleteProduct = async (id) => {

        try {

            if (confirm("Are you sure? Delete this product?")) {
                await axios.delete(`https://6850f0628612b47a2c07fce0.mockapi.io/products/${id}`)
                dispatch(deleteProducts({id}))
            }

        } catch (error) {
            alert("Something went wrong")
        }
    }

    return (
        <div className="p-6">

            <div className='flex justify-end mr-4 mt-4 md:mr-16'>
                <Link
                    to={"/admin/create-product"}
                    className='bg-blue-500 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition duration-150 shadow-md text-sm'>
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
                            <th className="tableBox ">Size / Price / Quantity</th>
                            <th className="tableBox ">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.products.map((item) => (
                                <tr>
                                    <td className="tableBox w-30">{item.title}</td>
                                    <td className="tableBox w-60">{item.description}</td>
                                    <td className="tableBox w-40">
                                        <img src={item.imageUrl} alt={item.title} draggable="false" />
                                    </td>
                                    <td className="tableBox">
                                        <div className="flex items-center justify-center gap-2 flex-wrap md:w-40 w-30">
                                            {item.details.map((obj, index) => (
                                                <span

                                                    className="bg-green-100 text-green-800 font-medium rounded-full px-3 py-1 text-sm shadow-sm border border-green-300"
                                                >
                                                    {`${obj.key} / ₹${obj.value} / ${obj.quantity}`}
                                                </span>
                                            ))}
                                        </div>
                                    </td>

                                    <td className="tableBox">
                                        <div className="flex flex-wrap gap-2 items-center justify-center">
                                            <Link
                                                to={`/admin/product/${item.id}`}
                                                className="bg-blue-500 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition duration-150 shadow-md text-sm">
                                                View
                                            </Link>

                                            <Link
                                                to={`/admin/edit/${item.id}`}
                                                className="bg-green-500 text-white px-3 py-1 rounded font-semibold hover:bg-green-600 transition duration-150 shadow-md text-sm">
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => deleteProduct(item.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded font-semibold hover:bg-red-700 transition duration-150 shadow-md text-sm cursor-pointer">
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
