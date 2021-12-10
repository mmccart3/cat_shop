const Basket = ({to_buy, setTo_buy, total ,setTotal}) =>{
    
    const removeHandler = (index) => {
        let storedTo_buy = [...to_buy]
        storedTo_buy.splice(index, 1)
        setTo_buy(storedTo_buy)
    }
    const mytotal = () => {
        let num = 0
        for (let index = 0; index < to_buy.length; index++) {
            num = num + parseFloat(to_buy[index].price);
      }
      return num
    }

    setTotal(mytotal)

        
    return(
        <div className="display"> 
            {to_buy.map((tobuy, index) => {
                return(
                    <div className="card">
                        <img src={tobuy.pic} alt='no pic'/>
                        <div className='para'>
                            <p>{tobuy.name}</p>
                            <p>£{tobuy.price}</p>
                        </div>
                        <button onClick={()=>removeHandler(index)}>remove</button>
                    </div>
                )
                
            })}
            <h5>Total to pay = £{total}</h5>

        </div>
        
    )
}

export default Basket