"use client";
import { useRouter } from "next/navigation";
import { useFavorites } from "../context/FavoritesContext";
import Header from "../components/Headerinscribed";
import Footer from "../components/Footerinscribed";

type AgentDetailProps = {
  id: number;
  name: string;
  profileImage: string;
  location: string;
  description: string;
};

const agentsData: AgentDetailProps[] = [
  {
    id: 1,
    name: "Karim Ben Fraj",
    profileImage: "images/agents/agent1.jpg",
    location: "Nabeul, Tunis",
    description: "Agent immobilier expérimenté avec plus de 10 ans d'expérience dans la vente de propriétés.",
  },
  {
    id: 2,
    name: "Hend Ben Boubaker",
    profileImage: "images/agents/agent2.jpg",
    location: "Mahdia, Tunis",
    description: "Spécialiste en immobilier commercial avec une expertise dans la gestion de grands immeubles.",
  },
  {
    id: 3,
    name: "Lotfi Becha",
    profileImage: "images/agents/agent3.jpg",
    location: "Sfax, Tunis",
    description: "Agent résidentiel spécialisé dans l'achat et la vente de maisons de luxe.",
  },
];

const AgentPage = () => {
  const router = useRouter();
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleConsultAgent = () => {
    if (router) {
      router.push('/Mesenger');
    } else {
      console.error('Router est undefined');
    }
  };

  const toggleFavorite = (id: number) => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">Nos Agents</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsData.map((agent) => (
            <div key={agent.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
              {/* Cœur favori */}
              <button
                onClick={() => toggleFavorite(agent.id)}
                className={`absolute top-4 right-4 text-lg cursor-pointer transition ${
                  isFavorite(agent.id) ? "text-red-500" : "text-gray-400"
                }`}
              >
                {isFavorite(agent.id) ? "❤️" : "🤍"}
              </button>
              
              <div className="flex items-center p-4">
                <img
                  src={agent.profileImage}
                  alt={`Image de profil de ${agent.name}`}
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-orange-600">{agent.name}</h2>
                  <p className="text-gray-600">{agent.location}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 mt-2">{agent.description}</p>
                <div className="mt-4">
                  <button
                    onClick={handleConsultAgent}
                    className="inline-block px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all"
                  >
                    Consulter l'agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentPage;
