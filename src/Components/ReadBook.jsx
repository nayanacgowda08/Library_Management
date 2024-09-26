import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/readbook.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ReadBook = () => {
  let params = useParams();
  let bookId = params.id;
  let navigateBack = useNavigate();
  let [readBook, setReadBook] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      let singleHookData = await fetch(`http://localhost:4000/books/${bookId}`);
      let resp = await singleHookData.json();
      setReadBook(resp);
    };
    fetchApi();
  }, [bookId]);

  // console.log(readBook);

  let [handleShort, setHandleShort] = useState(true);
  const handleShortDesc = () => {
    setHandleShort(!handleShort);
  };

  console.log(handleShort);
  // console.log(shortDescription)
  let [longDes, setLongDes] = useState(true);
  let longAccDesc = () => {
    setLongDes(!longDes);
  };

  let backArrow = () => {
    // window.history.back();
    navigateBack("/adminportal/books");
  };

  let {
    // id,
    title,
    // pageCount,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  } = readBook;

  return (
    <>
      <div className="arrow-key">
        <KeyboardBackspaceIcon onClick={backArrow} className="arrow-key-icon" />
      </div>
      {/* <i className="ri-arrow-left-line "></i> */}
      <div className="main-container">
        {/* <h1>{title}</h1> */}

        <div className="left">
          <img className="bookimg" src={thumbnailUrl} alt="" />
          <div className="book-title">{title}</div>
        </div>
        <div className="right">
          <div className="right-title">{title}</div>
          {/* <div className="shortdes"><strong>Short Desciption</strong> : {shortDescription}</div>
            <div className="longdes"><strong>Long Desciption</strong> : {longDescription}</div> */}
          <div className="accord-btn">
            <button onClick={handleShortDesc}>
              Short Description
              {handleShort ? (
                <KeyboardDoubleArrowDownIcon />
              ) : (
                <KeyboardDoubleArrowUpIcon />
              )}
              <p>{handleShort ? "" : shortDescription}</p>
            </button>
            <button onClick={longAccDesc}>
              Long Description
              {longDes ? (
                <KeyboardDoubleArrowDownIcon />
              ) : (
                <KeyboardDoubleArrowUpIcon />
              )}
              <p>{longAccDesc ? "" : longDescription}</p>
              {/* <p>{shortDescription}</p> */}
            </button>
          </div>
          <div className="others">
            <div>
              <strong>Authors:</strong> {authors}
            </div>
            <div>
              <strong>Categories:</strong> {categories}
            </div>
            <div>
              <strong>Status:</strong> {status}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBook;
