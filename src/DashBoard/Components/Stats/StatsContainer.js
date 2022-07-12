import StatItem from "./StatsItem";
import styled from "styled-components";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import FilePresentOutlinedIcon from "@mui/icons-material/FilePresentOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Users } from "../../../components/Users";

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
  @media (max-width: 800px) {
    row-gap: 1rem;
  }
`;

const StatsContainer = () => {
  const defaultStats = [
    {
      title: "Total Users",
      count: Users.length,
      icon: <AccountBoxOutlinedIcon />,
      color: "#e9b949",
      bcg: "#fcefc7",
      onClick: () => {
        window.location.href = "/users-info";
      },
    },
    {
      title: "Resumes",
      count: 110,
      icon: <FilePresentOutlinedIcon />,
      color: "#647acb",
      bcg: "#e0e8f9",
      onClick: () => {
        window.location.href = "/resume-data";
      },
    },
    {
      title: "Available Portals",
      count: 3,
      icon: <WorkOutlineOutlinedIcon />,
      color: "#d66a6a",
      bcg: "#ffeeee",
      onClick: () => {
        window.location.href = "/portals";
      },
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} onClick={item.onClick} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
