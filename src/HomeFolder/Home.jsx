import "../App.css";
import Hero from "./Hero";
import Grid from "./Grid";
import { FaCode } from "react-icons/fa6";
import { useState } from "react";

function Home() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Hero showSearch search={search} setSearch={setSearch}
        titleBeforeIcon={
          <>
            The home for girls in
          </>
        }
        titleAfterIcon="tech."
        subtitle={
          <>
            Directory website for women and girls seeking opportunities
            in the tech industry.
          </>
        }
        showIcon
        icon={<FaCode className="text-3xl sm:text-5xl" />}
      />
      <Grid search={search} />
    </>
  );
}

export default Home;
