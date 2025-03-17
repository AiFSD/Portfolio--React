import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import faTimes
import "../styles/search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const elements = document.querySelectorAll("body *");
    const results = [];

    elements.forEach((element) => {
      if (
        element.textContent &&
        element.textContent.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        const text = element.textContent;
        const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
        const before = text.substring(0, index);
        const match = text.substring(index, index + searchTerm.length);
        const after = text.substring(index + searchTerm.length);

        results.push({
          text: (
            <span>
              {before}
              <span className="search-highlight">{match}</span>
              {after}
            </span>
          ),
          element,
          originalText: element.textContent,
          highlightedOriginalText: element.textContent.replace(
            new RegExp(searchTerm, "gi"),
            (match) => `<span class="search-highlight">${match}</span>`
          ),
        });
      }
    });

    setSearchResults(results);

    if (results.length > 0) {
      setTimeout(() => {
        const firstResult = document.querySelector(".search-result");
        if (firstResult) {
          firstResult.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 0);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchResults([]);
  };

  const handleGoTo = (element) => {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleCancel = () => {
    setSearchResults([]);
    setSearchTerm("");
    // Restore original text content
    document.querySelectorAll(".search-result").forEach((result) => {
      const originalText = result.querySelector(".text-preview").textContent;
      result.querySelector(".text-preview").innerHTML = originalText;
    });
  };

  return (
    <div className="search-section">
      <h2 className="search-heading">
        Just <span> type the word and explore it</span>
      </h2>

      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={handleInputChange}
          ref={searchInputRef}
        />
        {searchResults.length > 0 && ( // Conditionally render cancel button
          <button className="cancel-btn" onClick={handleCancel}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <div key={index} className="search-result">
              <button onClick={() => handleGoTo(result.element)}>Go To</button>
              <div
                className="text-preview"
                dangerouslySetInnerHTML={{
                  __html: result.highlightedOriginalText,
                }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
