 const Add = (props) => {
    return(
        <div>
            <p>This is Add Component</p>
            <p>Addition = {parseInt(props.a) + parseInt(props.b)} </p>
        </div>
    )

 };

 export default Add;