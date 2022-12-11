import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/layout/Layout';
import Link from "next/link";

const Pricing = () => {
    
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        
        <><Layout>
                <section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                            Planos para cada <span className="text-blue-500">momento</span> da sua empresa.
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                            Nós temos a <strong className="text-blue-500">Solução</strong> para o seu crescimento <span className="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">Comece com um dos nossos planos de comunicação por API do <strong className="text-blue-500">WhatsApp, Instagram ou Facebook.</strong></p>
                                    </div>
                                    <div className="text-center lg:text-left" id='btn-sol-contato-form-planos'>
                                        <Link href="/signup">
                                            <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">Solicite um contato</a>
                                        </Link>
                                        <Link href="https://api.whatsapp.com/send?phone=5511991930623&text=demonstra%C3%A7%C3%A3o">
                                            <a className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                                Conhecer soluções
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/team.svg" alt="Touchworks" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-6">
                    <div className="container">
                        <div className="flex flex-wrap justify-between pt-8 pb-16">
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">2 Bilhões</span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Usuários no WhatsApp</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading"></span>
                                    <span className="sm:text-2xl font-bold font-heading count">99%</span>
                                    <span className="sm:text-2xl font-bold font-heading"> das pessoas </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Possuem o app</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">50% PME's</span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Utilizam o WhatsApp</p>
                                </div>
                            </div>
                            <div className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count">100 Mil </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Chatbots 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container">
                        <div className="text-center mb-8">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                                <span>Não perca essa </span>
                                <br />
                                <span className="text-blue-600">Oportunidade </span>
                                <span></span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                Ótimos planos para você começar
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg" alt="Touchworks" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Entry</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">R$149</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">150 Sessões de conversa/mês</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>WhatsApp API Oficial</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Chatbot Simples</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Integração <span className='text-blue-500'>Sistemas Jurídicos</span></span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Agenda Automática</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>3 Atendentes</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Suporte Comercial</span>
                                            </li>
                                        </ul>
                                        
                                    </div> 
                                        <p className="mt-2 mb-8 text-blueGray-300">+ ativação</p>                                       
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            Começar Grátis
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="https://dashboard.touchworks.com.br/signup" id='click-btn-contratar-entry'>
                                            Contratar
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Touchworks" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>
                                    <span className="text-4xl font-bold font-heading">R$289</span>
                                    <p className="mt-2 mb-8">250 Sessões de conversa/mês</p>
                                    <div className="flex flex-col items-center mb-8">
                                    <ul className="mt-2 mb-8">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Tudo do Entry +</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Integração Instagram</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Widget para site</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Ferramenta de pesquisa</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>4 Atendentes</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Suporte por WhatsApp</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <p className="mt-2 mb-8 text-blueGray-300">+ ativação</p>   
                                    <div>
                                    <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            Começar Grátis
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            Contratar
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg" alt="Touchworks" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Standard</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">R$397</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">400 Sessões de conversa/mês</p>
                                    <div className="flex flex-col items-center mb-8">
                                    <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Tudo do Startup + </span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Chatbot Personalizado*</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>kommo <span className='text-blue-500'><a href='https://www.kommo.com/br/'>CRM*</a></span></span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Facebook Messenger</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>5 Atendentes</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>100 Avisos de Audiência</span>
                                            </li>
                                        </ul>
                                    </div>
                                        <p className="mt-2 mb-8 text-blueGray-300">+ ativação</p>
                                    <div>
                                    <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            Começar Grátis
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            Contratar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-lg mb-16">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                <span>Seu escritório precisa de  </span>
                                <span className="text-blue-500">mais </span>
                                <span>poder?</span>
                            </h2>
                            <p className="text-base lg:text-lg text-blueGray-400 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                Ferramentas e integrações exclusivas, com total liberdade de personalização
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded shadow">
                            <div className="border-b border-gray-200">
                                <div className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Intermediate</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Para escritórios que já possuem um processo de atendimento estabelecido e querem se diferenciar com ferramentas de CRM e Automações específicas.</p>
                                        <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Tudo do Standard +</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Webhooks</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">E-mail</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">200 Avisos de Audiência</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            R$ 647
                                        </a>
                                        <p className="text-center text-blueGray-400">700 Sessões de conversa/mês</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Professional</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Ideal para escritórios que estão buscando automatizar todo seu processo de atendimento e captura de leads.</p>
                                        <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Tudo do Professional +</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">CRM Incluso</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Consultoria*</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Atendentes Ilimitados</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/signup">
                                            R$ 1199
                                        </a>
                                        <p className="text-center text-blueGray-400">900 Sessões de conversa/mês</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-200">
                                <div className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                        <h3 class="text-md font-bold font-heading">Advanced</h3>
                                    </div>
                                    <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                        <p className="mb-4 lg:mb-6 leading-loose">Para quem tem um grande volume de atendimentos e quer escalar com segurança e agilidade, este é seu plano.</p>

                                    </div>
                                    <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                        <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="https://api.whatsapp.com/send?phone=5511991930623&text=Falar%20com%20especialista">
                                            Falar com especialista 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
                
                <section className="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                <form id="sib-form" method="POST" action="https://472ab188.sibforms.com/serve/MUIEANG95cUEA6bfRHzR4GmK3uqmu6LFyskuXzq09eU0Lj7zNVyWsf3OfiKrS4nlJ8jOSAno3K8zHTfs8n5TmAm9Bc-9IHCMOkojR2qoC4FRyV6mcXglaWGI57_09AjvroP-rzD8hBHWuDK3G8UZ7raNKMniBJ9SAfGYDPDli7Vg6AgcunCt-6nRQob1xaWE0gUi6ZvtKPdSBIdS">
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span>Receba novidades em </span>
                                    <span className="text-blue-500"> primeira </span>
                                    <span>mão sobre novas tecnologias de atendimento digital.</span>
                                </h2>
                               
                                <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Suas informações são confidenciais
                                </p>
                                <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                        <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" data-required="true" id="EMAIL" name="EMAIL" autocomplete="off" type="text" placeholder="Digite seu e-mail" />
                                    </div>
                                    
                                    <button className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" form="sib-form" type="submit">
                                        Assinar
                                    </button>
                                    <br/>
                                </div>
                                
                            </div>
                        
                        </div>
                        
                    </div>
                    
                    </form>
                </section>
                
            </Layout>
        </>
    );
};

export default Pricing;