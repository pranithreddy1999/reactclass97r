

const TableData=()=>{
    const Data={
        id:"1",
        tittle:"Fjallraven- Foldsack No. 1 Backpack, Fits 15 Laptops",
        price:"109.95",
        category:"men's clothing",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        dimensions:150,

        id1:"2",
        tittle1:"Mens Casual Premium Slim Fit T-Shirts",
        price1:"22.3",
        category1:"men's clothing",
        image1:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    }
    return(
        <div>
        <table>
        <tr>
            <th>id</th>
            <th>tittle</th>
            <th>price</th>
            <th>category</th>
            <th><img src={Data.image} width={Data.dimensions}/></th>
        </tr>
        <tr>
            <td>{Data.id}</td>
            <td>{Data.tittle}</td>
            <td>{Data.price}</td>
            <td>{Data.category}</td>
            <td>{Data.image}</td>
            </tr>
            <tr>
                <td>{Data.id1}</td>
                <td>{Data.tittle1}</td>
                <td>{Data.price1}</td>
                <td>{Data.category1}</td>
                <td><img src={Data.image1} width={Data.dimensions}></img></td>
            </tr>
        </table>
        <h4>{Data.id}</h4>
            <h4>{Data.tittle}</h4>
            <h3>{Data.price}</h3>
            <h3>{Data.category}</h3>
            <img src={Data.image} height={Data.dimensions} width={Data.dimensions}/>
        </div>
    )
}
export default TableData