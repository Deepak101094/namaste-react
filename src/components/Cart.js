import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
	const cartItem = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	return (
		<>
			{cartItem.length === 0 && (
				<div
					data-testid='cartItemZero'
					className='bg-gray-100 pt-6 h-screen text-center'
				>
					<span className='text-lg  font-bold'>
						Your cart is empty! Please add items to the cart.
					</span>
				</div>
			)}
			<div className='bg-gray-100 w-full h-screen px-20 py-8 mx-auto flex gap-8'>
				<div className='w-8/12 flex flex-col gap-6'>
					<div className='bg-white p-12 flex flex-col gap-8 items-start '>
						<div>
							<h1 className='text-lg font-bold'>Add a delivery address</h1>
							<span className='text-sm text-gray-500'>
								You seem to be in the new location
							</span>
						</div>
						<div className='border border-dashed hover:shadow-lg py-6 px-14 w-[300px] h-[200px]'>
							<h1>Add New Address</h1>
							<button className='px-4 py-2 mt-20 text-sm font-bold bg-white text-green-500 border border-green-500'>
								ADD NEW
							</button>
						</div>
					</div>
					<div className='bg-white p-8'>
						<h1 className='text-lg text-gray-400 font-bold'>Payment</h1>
					</div>
				</div>
				<div className='w-4/12 bg-white p-6'>
					{/* <h1 className='text-lg font-bold mb-6'>Cart</h1> */}
					{cartItem.length !== 0 && (
						<button
							onClick={() => dispatch(clearCart())}
							className='bg-red-400 text-white px-4 py-2 text-lg rounded-lg mb-6 '
						>
							Clear Cart
						</button>
					)}
					{cartItem.map((item) => {
						console.log(item, "item");
						const {
							info: { id, name, price, description, imageId },
						} = item?.card;
						return (
							<div
								data-testid='cartItems'
								className=' flex mb-2  justify-around items-start'
							>
								<ItemList items={cartItem} />
								{/* <div className='w-6/12 text-sm text-gray-500 '> {name} </div>
								<div className='flex gap-6 justify-center items-center'>
									<button className='bg-white flex  items-center gap-4  border border-gray-300 shadow-2xl text-green-500  py-1 px-2'>
										<span className='text-gray-500'>－</span>
										<span className='text-xs'>1</span>
										<span className=''>+</span>
									</button>
									<span className='text-gray-500 text-sm'>
										{" "}
										₹ {price / 100}{" "}
									</span>
								</div> */}
							</div>
						);
					})}
					{/* <ItemList items={cartItem} /> */}
				</div>
			</div>
		</>
	);
};

export default Cart;
