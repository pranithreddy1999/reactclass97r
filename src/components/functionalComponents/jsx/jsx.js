

const Profile=()=>{
    const ProfileInformation={
        name:"pavan",
        address:"mg colony",
        url:"https://tse2.mm.bing.net/th?id=OIP.W1EDMzAxewBKHva2WSA3bAHaG9&pid=Api&P=0&h=220",
        dimensions:150 
    }
    return(
        <div>
            <h2>{ProfileInformation.name}</h2>
            <img src={ProfileInformation.url} height={ProfileInformation.dimensions} width={ProfileInformation.dimensions}/>
        </div>
    )
}
export default Profile