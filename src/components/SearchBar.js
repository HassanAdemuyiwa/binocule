import React from 'react';
import Form from 'reactstrap';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <Form>

    <input 
        style={BarStyling}
        key="random1"ya
        value={keyword}
        placeholder={"search country"}
        onChange={(e) => setKeyword(e.target.value)}
        />
        
    </Form>
    

  );
}

export default SearchBar