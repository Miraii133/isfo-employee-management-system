import EmployeeCard from "./components/EmployeeCard";
import InputTextField from "./components/InputTextField";
import RadioButton from "./components/RadioButton";
import InputTypeFile from "./components/InputTypeFile";

export default function Home() {
  return (
    <main>
      <RadioButton
        labelname="testlabelname"
        labeltext="testlabeltext"
        name="testinputname"
        value="testinputvalue"
      />
      <InputTextField name="firstname" placeholder="Firstname:" />
      <EmployeeCard />

      <InputTypeFile
        labelname="file"
        labeltext="Place file here"
        name="EmployeePic"
      />
    </main>
  );
}
