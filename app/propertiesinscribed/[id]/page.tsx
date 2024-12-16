import properties from '../../data/properties';
import PropertyDetail from '../../components/PropertyDetailinscribed';

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id); // `await` n'est pas nécessaire ici car `params` n'est pas une promesse.
  const property = properties.find((p) => p.id === id);

  if (!property) {
    // Gérez le cas où aucune propriété ne correspond à l'id donné.
    return (
      <div>
        <h1>Property not found</h1>
        <p>The property with the given ID does not exist.</p>
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
