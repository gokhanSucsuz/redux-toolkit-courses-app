import { useSelector } from "react-redux"

export const Navbar = () => {
    const { quantity } = useSelector((store) => store.courses)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container">
                    <a className="navbar-brand" href="#">Courses App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-light btn-sm position-relative">
                                    Cart
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {quantity}
                                    </span>
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
