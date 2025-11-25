export default function PokemonCard({ name, url }) {
  return (
    <div style={{
      border: "1px solid #ddd", 
      borderRadius: 8, 
      padding: 12, 
      width: 220,
      margin: 8
    }}>
      <h3 style={{ textTransform: "capitalize", margin: "0 0 8px 0" }}>{name}</h3>
      <p style={{ margin: 0, fontSize: 12, color: "#555" }}>
        Dados: {url}
      </p>
    </div>
  );
}
