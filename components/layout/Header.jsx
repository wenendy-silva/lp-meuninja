import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <Link href="/">
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-10"
                                    src="/assets/imgs/logos/meuninja-logo.png"
                                    alt="Touchworks"
                                />
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            
                        </ul>
                        <div className="hidden lg:block">
                            <Link href="https://dashboard.touchworks.com.br/signin">
                                <a className="btn-accent hover-up-2">Entrar</a>
                            </Link>
                            <Link href="https://dashboard.touchworks.com.br/affiliate?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY3QiOjI3LCJwcmQiOjE0LCJwbG4iOiJNTl9CQVNJQyIsImlzcyI6IlRXQyIsImV4cCI6MTcwMTgzMTYwMCwiaWF0IjoxNjcwMjk1NjAwfQ.whDBXfaQrPiRH_q1eV1aNPkm1n67tLtvYtnLUqZUGz8">
                                <a className="btn-primary hover-up-2">
                                    Contrate Agora
                                </a>
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={handleHidden}>
                                <svg
                                    className="fill-current h-4 w-4"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
