function handleClick(e, id) {
    e.preventDefault();
    console.log(id);
}


export default function Post({post}) {
    const {title, description, _id} = post
    return (
        <div onClick={(e) => handleClick(e, _id)} style={{border: '1px solid blue', backgroundColor: 'red',}}>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
        </div>)
}