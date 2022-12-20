import './cart.css'


const Cart = ({ movieData }) => {
    console.log(movieData);
    return (
        <>

            {
                movieData?.map(item => {

                    return (
                        <div className="cart">

                          <img src={`${item.Poster}`}></img>
                          <div className='cart-right'>
                          <h2>{item.Title} ({item.Year})</h2>  
                          <button>Добавить в список</button>
                          </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Cart
