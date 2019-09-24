import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const Styles = styled.div`
  body {
    margin: 0px;
  }

  header {
    text-align: center;
    margin: auto;
    overflow: hidden;
    width: 100%;
    border-style: solid;
    border-color: gray;
    border-width: 0px 0px 2px 0px;
  }

  #header {
    overflow: hidden;
    width: 80%;
    margin: auto;
    padding: 0px 20px 20px 20px;
  }

  #search-bar {
    width: 50%;
    justify-self: right;
    margin: 5px;
    border-color: gray;
    border-style: solid;
    border-radius: 10px;
    padding: 0px 0px 0px 10px;
  }

  #search-bar:hover,
  #search-bar:focus {
    border-color: black;
  }

  #search-btn {
    border-radius: 10px;
    margin-left: 5px;
  }

  #search-bar,
  #search-btn {
    height: 25px;
    text-overflow: hidden;
  }

  #search-bar:focus,
  #search-bar:hover,
  #search-btn:focus,
  #search-btn:hover {
    outline: none;
  }

  #search-btn:hover {
    cursor: pointer;
  }

  #search-bar:focus::placeholder {
    opacity: 0;
  }

  .book-container {
    display: flex;
    margin: auto;
    border-bottom: 2px solid gray;
    padding: 10px;
    align-items: end;
  }

  .noImage {
    display: flex;
    width: 128px;
    height: 192px;
    align-items: center;
    justify-content: center;
  }

  .bookColumn1 {
    min-width: 128px;
  }

  .bookColumn2 {
    padding-left: 20px;
  }

  .bookRow {
    display: flex;
    flex: 1;
  }

  a {
    color: black;
  }

  .noSearch {
    text-align: center;
    padding-top: 5px;
  }

  .prvsBtn {
    display: flex;
    flex: 2;
    justify-content: center;
  }

  .nextBtn {
    display: flex;
    flex: 2;
    justify-content: center;
  }

  .page-number {
    display: flex;
    justify-content: center;
    flex: 5;
  }

  .page-container {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 450px) {
    #search-bar::placeholder {
      font-size: 0.7rem;
  }

    .book-container {
      flex-direction: column;
    }

    .noImage {
      display: flex;
      width: auto;
      height: auto;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 992px) {
    h2 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1rem;
    }

    #search-bar {
      width: 100%;
    }

    button {
      font-size: 0.8rem;
      width: 100px;
    }

    .bookColumn1,
    .bookColumn2 {
      width: auto;
      padding: auto;
      margin: auto;
    }
  }
`;

class GoogleBooksSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: [],
      books: [],
      index: 0,
      noSearch: '',
      completedSearch: [],
      isLoading: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.bookSearch = this.bookSearch.bind(this);
  }

  //  Updates state of search to match input of search bar
  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  //  Searches when next button is clicked

  handleNext = () => {
    this.setState(
      prevState => ({
        index: prevState.index + 10,
        noSearch: false,
        isLoading: true,
        books: [],
      }),
      () => {
        $(window).scrollTop(0);
        this.bookSearch();
      }
    );
  };

  //  Searches when previous button is clicked
  handlePrevious = () => {
    this.setState(
      prevState => ({
        index: prevState.index - 10,
        noSearch: false,
        isLoading: true,
        books: [],
      }),
      () => {
        $(window).scrollTop(0);
        this.bookSearch();
      }
    );
  };

  // Sets states to initial values for first search
  handleSearch = () => {
    this.setState(
      () => ({
        index: 0,
        noSearch: false,
        completedSearch: this.state.search,
        isLoading: true,
        books: [],
      }),
      () => {
        this.bookSearch();
      }
    );
  };

  // Searches Google Books if input in search bar
  bookSearch() {
    const { completedSearch, index } = this.state;
    const gbooksApiKey = 'AIzaSyCdeXnP3jgZh0KNlKM1apJicXXcqb01308';
    
    if (completedSearch.length !== 0) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${completedSearch}&orderBy=relevance&startIndex=${index}&key=${gbooksApiKey}`
      )
        .then(response => response.json())
        .then(data => this.setState({ books: data.items, isLoading: false }));
    }

    // Updates states to initial values if no search performed
    else {
      this.setState({ noSearch: true });
      this.setState({ completedSearch: [] });
      this.setState({ search: [] });
      this.setState({ books: [] });
      this.setState({ index: 0 });
      this.setState({ isLoading: false });
    }
  }

  // Searches on Search Button click
  handleClick() {
    this.handleSearch();
  }

  // Searches if enter key is pressed
  handleEnter(event) {
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  }

  // Decodes Html entities.
  decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value
      .toString()
      .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
  }

  render() {
    const { books, noSearch, completedSearch, index, isLoading } = this.state;

    // Renders separate book items
    const bookItem =
      books && books.length
        ? books.map(book => (
            <div className="book-container" key={book.id}>
              <div className="bookColumn1">
                {book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail ? (
                  <a href={book.volumeInfo.infoLink} target="_blank">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </a>
                ) : (
                  <div className="noImage">
                    <p>No Image</p>
                  </div>
                )}
              </div>
              <div className="bookColumn2">
                <div className="bookRow">
                  <strong>
                    {book.volumeInfo && book.volumeInfo.title ? (
                      <a href={book.volumeInfo.infoLink} target="_blank">
                        <h2>{book.volumeInfo.title}</h2>
                      </a>
                    ) : (
                      ''
                    )}
                  </strong>
                </div>
                <div className="bookRow">
                  {book.volumeInfo && book.volumeInfo.subtitle ? (
                    <h4>{book.volumeInfo.subtitle}</h4>
                  ) : (
                    ''
                  )}
                </div>
                <div className="bookRow">
                  {book.volumeInfo && book.volumeInfo.authors ? (
                    <h6>{book.volumeInfo.authors.join(', ')}</h6>
                  ) : (
                    ''
                  )}
                </div>
                <div className="bookRow">
                  {book.searchInfo && book.searchInfo.textSnippet ? (
                    <p>{this.decodeHtml(book.searchInfo.textSnippet)}</p>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          ))
        : '';

    // When loading message
    const Loading =
      isLoading === true ? (
        <p className="noSearch" style={{ textAlign: 'center' }}>
          Loading results
        </p>
      ) : (
        ''
      );

    // No input message
    const PleaseSearch =
      isLoading === false && noSearch === true ? (
        <p className="noSearch" style={{ textAlign: 'center' }}>
          Please input your search
        </p>
      ) : (
        ''
      );

    // Results for search message
    const TopResults =
      isLoading === false && noSearch === false && books && books.length ? (
        <p className="topResults" style={{ textAlign: 'center' }}>
          Retrieved top results for "
          <b>
            <em>{completedSearch}</em>
          </b>
          "
        </p>
      ) : (
        ''
      );

    // No more results message
    const NoResults =
      isLoading === false && !books ? (
        <p className="topResults" style={{ textAlign: 'center' }}>
          No {index > 0 ? 'more' : ''} results for "
          <b>
            <em>{completedSearch}</em>
          </b>
          "
        </p>
      ) : (
        ''
      );

    // Previous page button
    const Previous =
      index >= 10 && isLoading === false && completedSearch ? (
        <button className="prvsBtn" onClick={this.handlePrevious}>
          Previous
        </button>
      ) : index === 0 && books && books.length ? (
        <button className="prvsBtn" disabled>
          Previous
        </button>
      ) : (
        ''
      );

    // Page number
    const PageNumber =
      isLoading === false && noSearch === false && books ? (
        <p className="page-number">Page {index / 10 + 1}</p>
      ) : (
        ''
      );

    // Next page button
    const Next =
      isLoading === false && books && books.length > 9 ? (
        <button className="nextBtn" onClick={this.handleNext}>
          Next
        </button>
      ) : books && books.length && books.length <= 9 ? (
        <button className="nextBtn" disabled>
          Next
        </button>
      ) : (
        ''
      );

    return (
      <Styles>
        <div className="main-content">
          <div>
            <header>
              <div id="header">
                <h1>Google Books Search</h1>
                <input
                  id="search-bar"
                  type="text"
                  placeholder="Input search term here"
                  value={this.state.search}
                  onChange={this.handleChange}
                  onKeyUp={this.handleEnter}
                />
                <button id="search-btn" onClick={this.handleClick}>
                  Search
                </button>
              </div>
            </header>
          </div>
          <div id="results">
            {Loading}
            {PleaseSearch}
            {TopResults}
            {NoResults}
            {bookItem}
            <div className="page-container">
              {Previous}
              {PageNumber}
              {Next}
            </div>
          </div>
        </div>
        <div className="main-content">
          <p>
          This Google Books Search project utilizes the Google Books API along with my personal 
          API key to perform a Google Books search. 10 books are saved per search into state and 
          rendered in the results area. Clicking the "next" or "previous" buttons adjusts the search 
          starting index, and performs another search.
          </p>
        </div>
      </Styles>
    );
  }
}

export default GoogleBooksSearch;
