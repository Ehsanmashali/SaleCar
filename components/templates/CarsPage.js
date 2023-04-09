import Card from "../module/Card";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data?.map((car) => (
        <Card key={car.id} {...car} />
        // <p key={car.id}>{car.name}</p>
      ))}
    </div>
  );
}

export default CarsPage;
