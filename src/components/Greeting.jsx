function Greeting(props) {
  return (
    <div>
      <h2>Olá, {props.name}!</h2>
      <p>Você tem {props.age} anos.</p>
    </div>
  );
}

export default Greeting;
