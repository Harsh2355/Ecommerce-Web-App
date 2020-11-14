import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Brand Logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                             PRODUCTS
                        </Link>
                    </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2"><i className="fa fa-cart-plus" /></span>
                            My Cart
                        </ButtonContainer>
                    </Link>
            </NavWrapper>
        )
    }
}

export const ButtonContainer= styled.button`
    padding: 7px 10px;
    font-size: 1.2rem;
    background:transparent;
    color:var(--mainWhite);
    border: 0.05rem solid;
    border-radius: 7px; 
    cursor:pointer;
    transition:all 0.5s ease-in-out;
   &:hover{
       background:#ff8080;
       color:var(--mainWhite);
   }
   &:focus{
       outline:none !important;
   }
`;

const NavWrapper= styled.nav`
    background:#f4adb6;
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;
