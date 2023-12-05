import EmployeeCard from "./components/EmployeeCard";
import picture from "../../public/sample.jpg";

export default function Home() {
  return (
    <main>
      <EmployeeCard
        picture={picture}
        status="Active"
        fullname="Mariel Mabano"
        email="mgmabano@addu.edu.ph"
        unit="Basic Education"
        designation="Computer Science"
      />
    </main>
  );
}
