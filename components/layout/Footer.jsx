import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/">
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    <img className="h-10" src="/assets/imgs/logos/meuninja-logo.png" alt="Touchworks" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                                Ajudando sua empresa a <strong>maximizar</strong> os resultados com a digitalização.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
                            <p className="lg:text-lg text-blueGray-400">Rua Osiris de Camargo, 100 - SP</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="sm:text-sm text-blueGray-300">WWF CONSULTORIA E SISTEMAS DE SOFTWARE LTDA</p>
                            <p className="lg:text-sm text-blueGray-300">CNPJ: 36.210.493/0001-31</p>
                        </div>
                        
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; 2022. Meu Ninja é uma empresa{" "}
                            <a className="text-blue-400" href="https://touchworks.com.br" target="_blank">
                                Touchworks Co.
                            </a>
                        </p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://facebook.com/TouchworksCo">
                                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Touchworks" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com/touch_works">
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="Touchworks" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
