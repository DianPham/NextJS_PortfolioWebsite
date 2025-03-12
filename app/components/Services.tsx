interface Service {
  id: string;
  name: string;
  description: string;
}

const Services = ({ services }: { services: Service[] }) => {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.length > 0 ? (
          services.map((service) => (
            <li key={service.id}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </ul>
    </div>
  );
};

export default Services;
