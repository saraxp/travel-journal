import PropTypes from 'prop-types'

function Card(prop) {
    return(
        <section className="card">
            <img className="cover" src= {`../images/${prop.item.cover}`}/>
            <section className="slot">
                <div className="location-line">
                    <img className="pin" src={`../images/${prop.item.pin}`}/>
                    <span className="location">{prop.item.location}</span>
                    <span className="map"><u>{prop.item.map}</u></span>  
                </div>
                <div className="title-line">
                    <span className="title">{prop.item.title}</span>   
                </div>
                <div className="date-line">
                    <span className="dates">{prop.item.dates}</span>     
                </div>
                <div className="des-line">
                    <span className="description">{prop.item.description}</span>    
                </div>
                
                
            </section>
        </section>
    );
}

Card.PropTypes = {
    prop : PropTypes.node,
}

export default Card;