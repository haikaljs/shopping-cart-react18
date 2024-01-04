const Header = (props) => {
  const { countCartItems } = props;
  return (
    <div className="row center block">
      <div>
        <a href="#/">
          <h2>Simple shopping cart</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart &nbsp;
          {countCartItems ? (
            <button className="badge">{countCartItems.length}</button>
          ) : (
            ""
          )}
        </a>
        <a href="#/signin"> Sign In</a>
      </div>
    </div>
  );
};

export default Header;
