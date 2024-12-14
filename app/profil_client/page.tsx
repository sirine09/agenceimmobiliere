
// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// // Définition de l'interface Client
// interface Client {
//   id: number;
//   email: string;
//   nom: string;
//   téléphone: string;
//   budget_max?: number | null;
//   preferences?: string | null;
//   avis_sur_service?: string | null;
//   image?: string | null;
// }

// // Fonction pour obtenir l'URL complète de l'image
// const getImageUrl = (imagePath: string | undefined): string => {
//   if (!imagePath) {
//     return "/images/client/default_profile_pic.jpg"; // Chemin de l'image par défaut
//   }
//   // Si l'image est un chemin relatif, ajoutez le domaine de base
//   if (imagePath.startsWith("/media/")) {
//     return `http://localhost:8000${imagePath}`;
//   }
//   return imagePath; // Sinon, renvoyez l'URL telle qu'elle
// };

// // Composant principal pour afficher le profil du client
// const ClientProfilePage = () => {
//   const searchParams = useSearchParams(); // Récupération des paramètres de recherche
//   const clientId = parseInt(searchParams.get("id") || "0", 10); // Extraction de l'ID client
//   const [client, setClient] = useState<Client | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchClient = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/utilisateur/api/client/${clientId}`);
//         if (!response.ok) {
//           throw new Error("Client introuvable ou une erreur est survenue.");
//         }
//         const data: Client = await response.json();
//         setClient(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (clientId) {
//       fetchClient();
//     } else {
//       setError("Aucun ID client fourni.");
//       setLoading(false);
//     }
//   }, [clientId]);

//   if (loading) return <div className="text-center mt-5">Chargement...</div>;
//   if (error) return <div className="text-center text-red-500 mt-5">Erreur : {error}</div>;

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
//       <h1 className="text-4xl font-semibold text-center text-[#f27405] mb-6">Profil du Client</h1>
//       {client && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="flex justify-center items-center">
//             <img
//               src={getImageUrl(client.image)}
//               alt="Profil"
//               className="w-36 h-36 rounded-full shadow-md border-4 border-[#f27405] mb-6"
//             />
//           </div>

//           <div className="text-lg">
//             <div className="mb-4">
//               <strong className="text-[#f27405]">Nom : </strong> {client.nom || "Non fourni"}
//             </div>
//             <div className="mb-4">
//               <strong className="text-[#f27405]">Email : </strong> {client.email}
//             </div>
//             <div className="mb-4">
//               <strong className="text-[#f27405]">Téléphone : </strong> {client.téléphone || "Non fourni"}
//             </div>
//             <div className="mb-4">
//               <strong className="text-[#f27405]">Budget Max : </strong> {client.budget_max ? `$${client.budget_max}` : "Non fourni"}
//             </div>
//             <div className="mb-4">
//               <strong className="text-[#f27405]">Préférences : </strong> {client.preferences || "Non fourni"}
//             </div>
//             <div className="mb-4">
//               <strong className="text-[#f27405]">Avis sur le service : </strong> {client.avis_sur_service || "Non fourni"}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientProfilePage;
"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from '../components/Headerinscribed';

// Définition de l'interface Client
interface Client {
  id: number;
  email: string;
  nom: string;
  téléphone: string;
  budget_max?: number | null;
  preferences?: string | null;
  avis_sur_service?: string | null;
  image?: string | null;
}

// Fonction pour obtenir l'URL complète de l'image
const getImageUrl = (imagePath: string | undefined): string => {
  if (!imagePath) {
    return "/images/client/default_profile_pic.jpg"; // Chemin de l'image par défaut
  }
  if (imagePath.startsWith("/media/")) {
    return `http://localhost:8000${imagePath}`;
  }
  return imagePath;
};

// Composant principal pour afficher le profil du client
const ClientProfilePage = () => {
  const searchParams = useSearchParams();
  const clientId = parseInt(searchParams.get("id") || "0", 10);
  const [client, setClient] = useState<Client | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await fetch(`http://localhost:8000/utilisateur/api/client/${clientId}`);
        if (!response.ok) {
          throw new Error("Client introuvable ou une erreur est survenue.");
        }
        const data: Client = await response.json();
        setClient(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (clientId) {
      fetchClient();
    } else {
      setError("Aucun ID client fourni.");
      setLoading(false);
    }
  }, [clientId]);

  if (loading) return <div className="text-center mt-5">Chargement...</div>;
  if (error) return <div className="text-center text-red-500 mt-5">Erreur : {error}</div>;

  return (
    <div> <Header/>
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-2xl rounded-lg border border-gray-300">
      
      <div className="relative">
        {/* Image de couverture */}
        <div className="h-48 bg-gradient-to-r from-[#f27405] to-orange-500 rounded-t-lg">
          <img
            src="/images/client/profile.jpg"
            alt="Couverture"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Image de profil */}
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
          <img
            src={getImageUrl(client?.image)}
            alt="Profil"
            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="text-center mt-16">
        <h1 className="text-3xl font-semibold text-[#f27405]">{client?.nom || "Nom Inconnu"}</h1>
        <p className="text-gray-600">{client?.email}</p>
        <p className="text-gray-500">{client?.téléphone || "Téléphone non fourni"}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-[#f27405] mb-4">Informations Générales</h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <span className="font-semibold text-gray-800">Budget Max :</span>{" "}
              {client?.budget_max ? `$${client.budget_max}` : "Non fourni"}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Préférences :</span>{" "}
              {client?.preferences || "Non fourni"}
            </li>
            <li>
              <span className="font-semibold text-gray-800">Avis sur le Service :</span>{" "}
              {client?.avis_sur_service || "Non fourni"}
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-[#f27405] mb-4">À Propos du Client</h2>
          <p className="text-gray-600">
            Ce client n'a pas encore ajouté de description détaillée. Vous pouvez contacter le
            client via son email ou numéro de téléphone pour plus d'informations.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClientProfilePage;
