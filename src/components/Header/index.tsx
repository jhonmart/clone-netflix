import "./Header.css";

type ColorProps = {
  black: boolean
}

export function Header(props: ColorProps) {
  return (
    <header className={props.black ? 'black' : ''}>
      <div className="header--logo">
        <a href="./">
          <img alt="Logo main" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
        </a>
      </div>
      <div className="header--user">
        <a href="./user">
          <img alt="Logo user default" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
        </a>
      </div>
    </header>
  )
}