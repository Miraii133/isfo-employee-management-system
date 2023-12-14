// import Main from "@/app/multiple-view-page/page";
// import Main from "@/app/main/single-view-page/page";
import EmployeeCard from "./components/EmployeeCard";
import MappingDataToEmployeeCard from "@/app/main/test/MappingDataToEmployeCard";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <MappingDataToEmployeeCard />
    </main>
  );
}
