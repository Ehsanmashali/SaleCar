import CarsPage from "component/components/templates/CarsPage";
import carsData from "../../data/carsData";
import Categories from "component/components/module/Categoreis";

const Details = () => {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
