import CarsPage from "component/components/templates/CarsPage";
import carsData from "../../data/carsData";
import Categories from "component/components/module/Categoreis";
import SearchBar from "component/components/module/SearchBar";

const Details = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
