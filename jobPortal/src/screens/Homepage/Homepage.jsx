import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Copyright } from "../../components/Copyright";
import { FeaturedCompanies } from "../../components/FeaturedCompanies";
import { FeaturedJobs } from "../../components/FeaturedJobs";
import { JobSearch } from "../../components/JobSearch";
import { Navbar } from "../../components/Navbar";
import { NavbarWrapper } from "../../components/NavbarWrapper";
import "./style.css";

export const Homepage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="homepage"
      style={{
        minWidth: screenWidth < 1440 ? "850px" : screenWidth >= 1440 ? "1440px" : undefined,
      }}
    >
      {screenWidth < 1440 && (
        <>
          <Navbar className="instance-node" />
          <JobSearch
            className="job-search-instance"
            divClassName="job-search-3"
            divClassName1="job-search-6"
            divClassNameOverride="job-search-5"
            frameClassName="job-search-2"
            frameClassNameOverride="job-search-4"
          />
        </>
      )}

      {screenWidth >= 1440 && (
        <>
          <NavbarWrapper className="instance-node" />
          <JobSearch className="instance-node" />
        </>
      )}

      <FeaturedCompanies
        className="instance-node-2"
        intel={
          screenWidth < 1440
            ? "https://c.animaapp.com/MlmHrukd/img/intel-1-1@2x.png"
            : screenWidth >= 1440
            ? "https://c.animaapp.com/MlmHrukd/img/intel-1-2@2x.png"
            : undefined
        }
        meta={
          screenWidth < 1440
            ? "https://c.animaapp.com/MlmHrukd/img/meta-1-1@2x.png"
            : screenWidth >= 1440
            ? "https://c.animaapp.com/MlmHrukd/img/meta-1-2@2x.png"
            : undefined
        }
      />
      <FeaturedJobs className="instance-node-2" />
      <Copyright />
    </div>
  );
};
