import { CSSProperties } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useQuery } from "@tanstack/react-query";
import { fetchAssignments } from "./dal";
import { GridLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "60px auto 0",
};

function Home() {
  const { data: assignments = [], isLoading } = useQuery({
    queryKey: ["assignments"],
    queryFn: fetchAssignments,
  });

  return (
    <>
      <Header />
      {isLoading && (
        <GridLoader
          loading={isLoading}
          color={"#ffffff"}
          cssOverride={override}
        />
      )}
      {!isLoading && <Assignments assignments={assignments} />}
    </>
  );
}

export default Home;
