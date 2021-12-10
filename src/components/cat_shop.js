import './../App.css';

const Catshop = ({catData, to_buy, setTo_buy} )=> {
    const addHandler = (cat) => {
        let storedTo_buy = [...to_buy]
        let buyInfo = {
            pic: cat.url,
            name: cat.name,
            price: cat.price
        }
        storedTo_buy.push(buyInfo)
        setTo_buy(storedTo_buy)
    }
    return(
        <div className='display'>
            <h1>Cat4Life</h1>
            {catData.map((cat) => {
                return(
                    <div className="card">
                        <img src={cat.url} alt='no pic'/>
                        <div className='para'>
                            <p>{cat.name}</p>
                            <p>£{cat.price}</p>
                        </div>
                        <button onClick={() => addHandler(cat)}>Add</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Catshop