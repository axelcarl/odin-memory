import '../styles/Card.css'
function Card(props) {
  return (
      <div className="Card">
        <img src={props.image} alt=''></img>
      </div>
  );
}

export default Card;
