import React from "react";
// import Form from 'reactstrap';
import { Input, InputGroup, InputGroupAddon, Container } from "reactstrap";
import time from "../icons/Group 13502.svg";
import search from "../icons/searching-magnifying-glass.svg";
import slogo from "../icons/Group 11652.svg";
import "../styles.css";

const SearchBar = () => {
  return (
    <Container className="themed-container ">
      <InputGroup className="search-bar">
        <InputGroupAddon addonType="prepend">
          <img width="100%" src={slogo} alt="slogo" />
        </InputGroupAddon>
        <Input placeholder="Find places, activities" className="search" />
        <InputGroupAddon addonType="append">
          <img width="100%" src={search} alt="search" />
          <img width="100%" src={time} alt="time" />
        </InputGroupAddon>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
