import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MENÚ </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link href="/">
                    <a className="nav.link p-4">  Inicio  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                    <a className="nav.link p-4">   About   </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/services">
                    <a className="nav.link p-4">   Services    </a>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navigation;