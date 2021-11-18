const AutocompleteComponent = ({ name }) => {
  return (
    <div className="relative">
      <img className="icon-search" src="/images/lupa.png" alt="" />
      <li className="suggestions flex align-items-center color-gris "> {name} </li>
    </div>
  );
};

export default AutocompleteComponent;
