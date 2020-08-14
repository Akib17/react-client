import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logoScroll from '../../Assets/image/logo.png';
import logo from '../../Assets/image/logo-v1.1.png';
import { NavLink, Link } from 'react-router-dom';

class TopNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navLogo: [logo],
            navBarBg: 'navBarBg',
            navItem: 'navItem',
            pageTitle: props.title
        };
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navLogo: [logoScroll],
                navBarBg: 'navBarBgScroll',
                navItem: 'navItemScroll'
            });
        } else if (window.scrollY < 100) {
            this.setState({
                navLogo: [logo],
                navBarBg: 'navBarBg',
                navItem: 'navItem'
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBarBg} variant="dark">
                    <Navbar.Brand className="navLogo" href="#home"><Link to="/"><img src={this.state.navLogo} alt="Main logo" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav className="TopNavigationItem">
                            <Nav.Link>
                                <NavLink exact activeStyle={{ color: '#958cff' }} className={this.state.navItem} to="/">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{ color: '#958cff' }} className={this.state.navItem} to="/service">Services</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{ color: '#958cff' }} className={this.state.navItem} to="/course">Courses</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{ color: '#958cff' }} className={this.state.navItem} to="/portfolio">Portfolio</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{ color: '#958cff' }} className={this.state.navItem} to="/contact">Contact</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink exact activeStyle={{ color: '#958cff' }} className={this.state.navItem} to="/about">About</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;