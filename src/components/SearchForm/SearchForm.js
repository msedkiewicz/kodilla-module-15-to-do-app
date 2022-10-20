import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { updateSearchString, searchInputValue } from "../../redux/store";

const SearchForm = (props) => {
  const currentSearchString = useSelector(searchInputValue);
  const [searchValue, setSearchValue] = useState(currentSearchString); // why use state?
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
  };
  return (
    <form className={styles.searchForm}  onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} /* construction ?*/ />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
