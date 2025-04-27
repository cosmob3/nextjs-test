// Use client directive: include this file in our JavaScript bundle(Use only when absolutely necessary.)
// To make our apps as fast as possible
import AddToCart from "./AddToCart";

export default function ProductCard() {
  return (
    <div>
      <AddToCart />
    </div>
  );
}
// We want to render all the markup on the server & move button to client
