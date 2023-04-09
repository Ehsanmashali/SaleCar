import { useRouter } from "next/router";

import CarDetails from "component/components/templates/CarDetails";
import carsData from "component/data/carsData";

const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];

  return (
    <>
      <CarDetails {...carDetails} />
    </>
  );
};

export default CarDetail;
