function Button ({values,personName,age}){
    return (
        <div className="btn">
            <button>{values}</button>
            <p>{personName}</p>
            <p>{age}</p>
        </div>
    )

}
export default Button