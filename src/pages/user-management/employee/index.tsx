import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import Container from "@/components/Container/Container";
import dynamic from "next/dynamic";
const DataTable = dynamic(() => import("@/components/DataTable/DataTable"), {
  ssr: false,
});

export default function EmployeePage() {
  return (
    <Container className="flex flex-1 flex-col gap-md">
      <BreadCrumb />
      <div className="flex-1 rounded-lg bg-white">
        <div className="mt-5">
          <DataTable />
        </div>
      </div>
    </Container>
  );
}
