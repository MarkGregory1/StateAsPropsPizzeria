import './MenuItem.css';

function MenuItem({type, price, qty, id, updateQty}){
  // Using the updateQty function that was passed down from the Menu component. The values for "id" and "qty" that are passed in as arguments for the following functions are the values passed in for the "id" and "qty" props when each MenuItem component is created.
  function addSlice(){
    updateQty(id, qty + 1); 
  }

  function removeSlice(){
    updateQty(id, qty - 1);
  }

  return(
    <div className='MenuItem'>
      <div>{type}</div>
      <div>${price}</div>
      <div>Qty: {qty}</div>
      <button onClick={addSlice}>+</button>
      {/* Using a Ternary so the "removeSlice" function will NOT run when the qty is a zero (NOTE: "null" is used for the "else" in this Ternary so that nothing will happen if the condition is false) */}
      <button onClick={() => (qty > 0) ? removeSlice() : null}>-</button>
      <div>Total: ${price * qty}</div>
    </div>
  );
}

export default MenuItem;