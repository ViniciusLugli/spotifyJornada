import { Link, useLocation } from "react-router-dom";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currentObj, index) => (
            <SingleItem
              {...currentObj}
              idPath={idPath}
              key={`${items}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
