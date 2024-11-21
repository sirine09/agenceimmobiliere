"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Type pour les informations de l'agent
type AgentDetailProps = {
  id: string;
  name: string;
  profileImage: string;
  location: string;
  description: string;
  contactLink: string;
};

// Données des agents, vous pouvez les remplacer par un appel API réel
const agentsData: AgentDetailProps[] = [
  {
    id: "1",
    name: "John Doe",
    profileImage: "../images/agents/agent1.jpg",
    location: "New York, USA",
    description: "Agent immobilier expérimenté avec plus de 10 ans d'expérience dans la vente de propriétés.",
    contactLink: "/contact-agent/1",
  },
  {
    id: "2",
    name: "Jane Smith",
    profileImage: "../images/agents/agent2.jpg",
    location: "San Francisco, USA",
    description: "Spécialiste en immobilier commercial avec une expertise dans la gestion de grands immeubles.",
    contactLink: "/contact-agent/2",
  },
  {
    id: "3",
    name: "Samuel Brown",
    profileImage: "../images/agents/agent3.jpg",
    location: "Los Angeles, USA",
    description: "Agent résidentiel spécialisé dans l'achat et la vente de maisons de luxe.",
    contactLink: "/contact-agent/3",
  },
];

const AgentContactPage = ({ params }: { params: { id: string } }) => {
  const [agent, setAgent] = useState<AgentDetailProps | null>(null);

  useEffect(() => {
    const getAgentData = async () => {
      // Attendre que params soit résolu avant d'accéder à `id`
      const resolvedParams = await params;
      const agentData = agentsData.find((agent) => agent.id === resolvedParams.id);
      setAgent(agentData || null);
    };

    getAgentData();
  }, [params]);

  if (!agent) {
    return <div>Chargement...</div>; // Afficher un message de chargement si l'agent n'est pas trouvé
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        {/* Affichage des détails de l'agent */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center p-6">
            {/* Image circulaire */}
            <img
              src={agent.profileImage}
              alt={`Image de profil de ${agent.name}`}
              className="w-20 h-20 object-cover rounded-full mr-4" // Image ronde
            />
            <div>
              <h1 className="text-3xl font-bold text-orange-600 mb-2">{agent.name}</h1>
              <p className="text-lg text-gray-600">{agent.location}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-700 px-6">{agent.description}</p>

          {/* Formulaire de contact */}
          <div className="mt-8 px-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Contactez cet agent</h2>
            <form action={agent.contactLink} method="get">
              <label className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-md mb-4"
                placeholder="Entrez votre message ici"
              />
              <button
                type="submit"
                className="px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-all"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentContactPage;
