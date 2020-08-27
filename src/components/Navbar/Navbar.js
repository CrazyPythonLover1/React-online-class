import React from 'react';


const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: '#e3f2fd'}}>
                <a className="navbar-brand" href="#"> <img src={props.logo} style={{width:"6rem"}} alt=""/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> Take a Course</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" tabindex="-1" > Teach Others </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                    <li className="nav-item ml-auto">
                            <a className="nav-link " href="#" tabindex="-1" > Cart:{props.cart.length} </a>
                        </li>
                    </ul>
                        

                </div>
            </nav>

        </div>
    );
};

export default Navbar;