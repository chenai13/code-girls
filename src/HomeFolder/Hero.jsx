import "../App.css";
import { FaCode } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { directoryData } from "../data/directoryData";

function Hero({
  titleBeforeIcon,
  titleAfterIcon,
  subtitle,
  showIcon = false,
  icon,
  showSearch,
 search = "",
  setSearch = () => {},
  data = [],
}) {
  const [searchResults, setSearchResults] = useState([]);

  const websites = directoryData;

  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = websites.filter((website) =>
      website.name.toLowerCase().startsWith(search.toLowerCase()),
    );

    setSearchResults(filtered);
  }, [search]);

  return (
    <>
      <main className="flex justify-center text-center flex-col -mt-44 w-full min-w-80 min-h-screen pt-24">
        <section>
          <h1 className="text-4xl sm:text-5xl font-semibold mx-auto max-w-sm">
            <>
              {titleBeforeIcon}{" "}
              {showIcon && (
                <span className="inline-flex items-center relative top-1.5">
                  {icon}
                </span>
              )}{" "}
              {titleAfterIcon}
            </>
          </h1>
          <p className="text-xs sm:text-sm md:text-base pt-4 pb-8 mx-auto max-w-xs text-gray-800">
            {subtitle}
          </p>

          {/* ----------------------*/}
          {showSearch && (
            <section className="flex justify-center">
              <div className="p-3 relative z-0 w-70 md:w-90">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-100 w-full py-1 px-4 rounded-md focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
                <button className="absolute top-0 right-0 mr-5 mt-3.5">
                  <IoIosSearch style={{ display: "inline-block" }} />
                </button>
              </div>
            </section>
          )}
          <div className="relative z-0 w-70 md:w-90 py-1 px-4  m-auto">
            <div className="absolute w-full left-0 top-0 bg-gray-100 rounded-md">
              {search && (
                <div>
                  {searchResults.map((searchResult) => (
                    <div>
                      <a
                        href={searchResult.url}
                        className="cursor-pointer"
                        target="_blank"
                        onClick={(event) => true}
                      >
                        {searchResult.name}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
