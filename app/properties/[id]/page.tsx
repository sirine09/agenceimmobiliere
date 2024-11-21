import properties from '../../data/properties';
import PropertyDetail from '../../components/PropertyDetail';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params; // Assurez-vous que params est attendu.
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">
          Propriété non trouvée
        </h1>
        <p>Veuillez vérifier l'identifiant de la propriété.</p>
      </div>
    );
  }

  return (
    <div>
      <PropertyDetail
        id={property.id}
        title={property.title}
        imageUrl={property.imageUrl}
        price={property.price}
        location={property.location}
        description={property.description}
        similarImages={property.similarImages}
      />
    </div>
  );
};

export default PropertyDetailsPage;
