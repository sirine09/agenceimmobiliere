"use client";
import { useFavorites } from "../context/FavoritesContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AgentDetailProps = {
  id: number;
  name: string;
  profileImage: string;
  location: string;
  description: string;
};

// Exemple de données d'agents
const agentsData: AgentDetailProps[] = [
  {
    id: 1,
    name: "Karim Ben Fraj",
    profileImage: "/images/agents/agent1.jpg",
    location: "Nabeul, Tunis",
    description: "Agent immobilier expérimenté avec plus de 10 ans d'expérience dans la vente de propriétés.",
  },
  {
    id: 2,
    name: "Hend Ben Boubaker",
    profileImage: "/images/agents/agent2.jpg",
    location: "Mahdia, Tunis",
    description: "Spécialiste en immobilier commercial avec une expertise dans la gestion de grands immeubles.",
  },
  {
    id: 3,
    name: "Lotfi Becha",
    profileImage: "/images/agents/agent3.jpg",
    location: "Sfax, Tunis",
    description: "Agent résidentiel spécialisé dans l'achat et la vente de maisons de luxe.",
  },
];

const FavoritesAgent = () => {
  const { favorites } = useFavorites();
  const router = useRouter();

  const [visibleAgents, setVisibleAgents] = useState(
    agentsData.filter((agent) => favorites.includes(agent.id))
  );

  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null);

  const handleConsultAgent = () => {
    if (router) {
      router.push('/Mesenger');
    } else {
      console.error("Router est undefined");
    }
  };

  const handleRemoveAgent = (id: number) => {
    setVisibleAgents((prevAgents) => prevAgents.filter((agent) => agent.id !== id));
  };

  return (
    <div
      style={{
        backgroundColor: "#fff7e6",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">Mes agents favoris</h1>

      {visibleAgents.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {visibleAgents.map((agent) => (
            <div
              key={agent.id}
              style={{
                width: "300px",
                backgroundColor: "white",
                border: "1px solid #f97316",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                position: "relative",
                padding: "10px",
                transition: "transform 0.2s ease-in-out",
                transform:
                  hoveredAgent === agent.id
                    ? "translate(5px, -5px)"
                    : "translate(0, 0)",
              }}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              <button
                onClick={() => handleRemoveAgent(agent.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              >
                ❤️
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <img
                  src={agent.profileImage}
                  alt={agent.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    {agent.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                    }}
                  >
                    {agent.location}
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  {agent.description}
                </p>
                <button
                  onClick={handleConsultAgent}
                  style={{
                    padding: "8px 12px",
                    background:" #f97316",
                    color: "white",
                    borderRadius: "20px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.3s ease",
                  }}
                >
                  Consulter l'agent
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#555",
          }}
        >
          Aucun agent marqué comme favorit.
        </p>
      )}
    </div>
  );
};

export default FavoritesAgent;

