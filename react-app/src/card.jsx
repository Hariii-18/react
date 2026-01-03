function Card(){
    const Rating = 4.50;
    return(
        <div className="Card">
            <img className="img1" src="./src/assets/biryani.webp" alt="Biryani" />
            <h2 className="card-Heading">Chicken Biryani</h2>
            <p className="card-p">A special hyderabad biryani</p>
            <p className="rating">Rating:{Rating} </p>
            <p className="price">$40</p>
        </div>
    );
}

export default Card ;