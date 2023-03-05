const CardDetails = ({ele, dlt, remove, send}) => {
    return (
        <>
            <div className="items_img">
                <img src={ele.imgdata} alt=""/>
            </div>
            <div className="details">
                <p><strong>Price</strong> : ₴ {ele.price}</p>
                <p><strong>Description</strong> : {ele.description}</p>
                <p><strong>Total</strong> : ₴ {ele.price * ele.qnty}</p>
                <div className='mt-5 d-flex justify-content-between align-items-center'
                     style={{width: 100, cursor: "pointer", background: "#ddd", color: "#111"}}>
                                <span style={{fontSize: 24}}
                                      onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                    <span style={{fontSize: 22}}>{ele.qnty}</span>
                    <span style={{fontSize: 24}} onClick={() => send(ele)}>+</span>
                </div>
            </div>
        </>
    );
};

export default CardDetails;
