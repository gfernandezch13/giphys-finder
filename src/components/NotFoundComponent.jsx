const NotFoundComponent = () => {
  return (
    <div className="not-found flex flex-direction justify-content-center align-items-center">
      <img width="230" src="/images/confusion.svg" alt="" />
      <br />
      <h2>Lo sentimos, no encontramos lo que buscas</h2>
      <h3>¡Inténtalo de nuevo!</h3>
    </div>
  );
};

export default NotFoundComponent;
