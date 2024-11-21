"use client";

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

type AgentDetailProps = {
  id: string;
  name: string;
  profileImage: string;
  location: string;
  description: string;
  contactLink: string;
};

const agentsData: AgentDetailProps[] = [
  {
    id: "1",
    name: "John Doe",
    profileImage: "images/agents/agent1.jpg",
    location: "New York, USA",
    description: "Agent immobilier expérimenté avec plus de 10 ans d'expérience dans la vente de propriétés.",
    contactLink: "/contact-agent/1",
  },
  {
    id: "2",
    name: "Jane Smith",
    profileImage: "images/agents/agent2.jpg",
    location: "San Francisco, USA",
    description: "Spécialiste en immobilier commercial avec une expertise dans la gestion de grands immeubles.",
    contactLink: "/contact-agent/2",
  },
  {
    id: "3",
    name: "Samuel Brown",
    profileImage: "images/agents/agent3.jpg",
    location: "Los Angeles, USA",
    description: "Agent résidentiel spécialisé dans l'achat et la vente de maisons de luxe.",
    contactLink: "/contact-agent/3",
  },
];

const AgentPage = () => {
  const router = useRouter();

  const handleConsultAgent = (contactLink: string) => {
    // Redirige vers la page de contact spécifique de l'agent
    router.push(contactLink);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">Nos Agents</h1>
        
        {/* Liste des agents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsData.map((agent) => (
            <div key={agent.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center p-4">
                {/* Image de profil circulaire à côté du nom */}
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
                    onClick={() => handleConsultAgent(agent.contactLink)}
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
