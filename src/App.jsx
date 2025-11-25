import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // busca os 20 primeiros pokémons
    async function fetchList() {
      try {
        setLoading(true);
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!res.ok) throw new Error("Erro ao consultar API");
        const data = await res.json();
        setPokemons(data.results); // results = [{name, url}, ...]
      } catch (err) {
        setError(err.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    fetchList();
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <Header />

      <main style={{ padding: 20 }}>
        <h2>Lista de Pokémons</h2>

        {loading && <p>Carregando...</p>}
        {error && <p style={{ color: "red" }}>Erro: {error}</p>}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {pokemons.map((p) => (
            <PokemonCard key={p.name} name={p.name} url={p.url} />
          ))}
        </div>
      </main>
    </div>
  );
}
