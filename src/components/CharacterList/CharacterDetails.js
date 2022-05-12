const CharacterDetails = (props) => {
  return (
    <div>
      <img src={props.data.image} alt={props.data.name} />
      <p>{props.data.name}</p>
    </div>
  );
};

export default CharacterDetails;
