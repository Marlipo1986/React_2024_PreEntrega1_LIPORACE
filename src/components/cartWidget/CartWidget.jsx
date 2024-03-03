import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const CartWidget = () => {
  return (
    <>
    <div className="cart-number" fontSize="large">
      <DinnerDiningIcon alt='cart-widget'/>
      <p>17</p>
    </div>
    </>
  );
};

export default CartWidget