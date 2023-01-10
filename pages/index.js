import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link";
import TagManager from 'react-gtm-module';

const Index2 = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        <>
            <Layout>
                <section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-6xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                        O Meu Ninja trabalha para você enquanto você está focado<span className="text-blue-600"> no seu negócio!</span>
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                        <span className="text-blue-600 font-bold">O Meu Ninja</span> é seu assistente virtual pessoal mais completo para a gestão de horários para profissionais liberais e empresas. Tenha acesso gratuitamente a:{" "}
                                        <br/>
                                        
                                            <span className="typewrite d-inline text-brand">
                                            <br/>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Agendamento Automático</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Lembretes e Confirmações</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="h-6 w-6 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span className="text-blueGray-400">Liberdade de tempo</span>
                                            </li>
                                            </span>
                                        </p><br/>
                                        <p className="text-blue-500 leading-relaxed font-bold wow animate__animated animate__fadeIn" data-wow-delay=".4s">Tudo isso no seu WhatsApp</p>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-600 rounded wow animate__animated animate__fadeIn" href="https://dashboard.touchworks.com.br/signup">
                                            Teste Grátis
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/eating.png" alt="Touchworks" />
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
                <section className="pt-16 pb-20" id="key-features">
                    <div className="container">
                        <div className="flex flex-wrap items-center mb-12">
                            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                   
                                    <span className="text-blue-600">Tenha agora seu assistente virtual particular para ajudar no atendimento com seus clientes.</span>
                                   
                                </h2>
                                <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-left">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/mockup-agenda.png" alt="Touchworks" />
                                </div>
                            </div>
                            </div>
                            
                            <div className="w-full lg:w-1/2">
                            <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="px-4">
                                                <div className="w-8 mr-1 text-blue-600 font-bold">
                                                    <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="px-4">
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Agende Direto pelo WhatsApp</h3>
                                                
                                            </div>
                                        </li>
                                <p className="lg:pl-16 text-blueGray-600 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                Atendimento 24h por dia automaticamente pelo canal preferido dos brasileiros, o WhatsApp.
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
                <section className="py-20" id="how-we-work">
                    <div className="container">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8">
                                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Um Nija faz tudo pra você
                                        </span>
                                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Comece um teste <span className="text-blue-600">grátis</span> hoje!
                                    </h2>
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Tenha todos seus compromissos em uma só agenda e disponibilize um Ninja para seus clientes.
                                    </p>
                                    <Link href="https://dashboard.touchworks.com.br/affiliate?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY3QiOjI3LCJwcmQiOjE0LCJwbG4iOiJNTl9CQVNJQyIsImlzcyI6IlRXQyIsImV4cCI6MTcwMTgzMTYwMCwiaWF0IjoxNjcwMjk1NjAwfQ.whDBXfaQrPiRH_q1eV1aNPkm1n67tLtvYtnLUqZUGz8">
                                        <a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-500 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            Começar Grátis
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8">
                                <ul className="space-y-12">
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Flexibilidade e disponibilidade</h3>
                                            <p className="text-blueGray-400 leading-loose">Deixe o Meu Ninja cuidar 24 horas por dia dos assuntos mais burocráticos enquanto você está trabalhando.</p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Integração e facilidade</h3>
                                            <p className="text-blueGray-400 leading-loose">Não precisa instalar, aprender nem ensinar novos sistemas complexos.</p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                        </div>
                                        <div className="px-4">
                                            <h3 className="my-4 text-xl font-semibold">Satisfação</h3>
                                            <p className="text-blueGray-400 leading-loose">Deixe seu cliente mais feliz com um atendimento rápido.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="container">
                        <div className="flex flex-wrap -mx-3">
                            
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                                <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Seu Ninja organiza tudo!
                                        </span>
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                        Sua agenda totalmente  <span className="text-blue-500">Personalizada</span> e <span className="text-blue-500">Integrada</span>
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Confirmação automática de presença para você nunca mais perder nenhum horário.
                                    </p>
                                </div>
                                <div className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div id="carausel-fade-1-arrows" className="flex"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="relative w-full rounded">
                                    <div className="carausel-fade slick-carausel rounded" id="carausel-fade-1">
                                    <div className="flex items-center justify-left">
                                    <img className="lg:max-w-lg" src="/assets/imgs/illustrations/confirm.png" alt="Touchworks" />
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container">
                        <div className="text-center mb-8">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                                <span>Sistema profissional usado por</span>
                                <br />
                                <span className="text-blue-600"> grandes empresas </span>
                                <span>à sua disposição</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                Ótimos planos para você começar
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg" alt="Touchworks" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Básico</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">R$14</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">Até 50 Agendamentos/mês</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Ninja no WhatsApp</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Confirmação de presença</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Integração <span className='text-blue-500'>Google Calendar</span></span>
                                            </li>

                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 Agenda</span>
                                            </li>

                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>WhatsApp Compartilhado</span>
                                            </li>

                                        </ul>
                                        
                                    </div> 
                                        
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/affiliate?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY3QiOjI3LCJwcmQiOjE0LCJwbG4iOiJNTl9CQVNJQyIsImlzcyI6IlRXQyIsImV4cCI6MTcwMTgzMTYwMCwiaWF0IjoxNjcwMjk1NjAwfQ.whDBXfaQrPiRH_q1eV1aNPkm1n67tLtvYtnLUqZUGz8">
                                            Quero Esse
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Touchworks" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Essencial</h3>
                                    <span className="text-4xl font-bold font-heading">R$49</span>
                                    <p className="mt-2 mb-8">Até 300 Agendamentos/mês</p>
                                    <div className="flex flex-col items-center mb-8">
                                    <ul className="mt-2 mb-8">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Tudo do Básico +</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>2 Agendas</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Widget para site</span>
                                            </li>
                                            
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Suporte por Chat</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>WhatsApp Compartilhado</span>
                                            </li>

                                        </ul>
                                    </div>
                                        
                                    <div>
                                    <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/affiliate?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY3QiOjEsInByZCI6MTQsInBsbiI6Ik1OX0VTU0VOVElBTCIsImlzcyI6IlRXQyIsImV4cCI6MTcwMTgzMTYwMCwiaWF0IjoxNjcwMjk1NjAwfQ._JThoIfrrOx5FuFvyaIuaZjQPXKu6KNdC_ftgPMgyXU">
                                            Quero Esse
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg" alt="Touchworks" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Standard</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">R$89</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">500 Agendamentos/mês</p>
                                    <div className="flex flex-col items-center mb-8">
                                    <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Tudo do Essencial + </span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Número WhatsApp Dedicado</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Pesquisa <span className='text-blue-500'>Satisfação</span></span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>4 Agendas</span>
                                            </li>
                                            
                                          
                                        </ul>
                                    </div>
                                       
                                    <div>
                                    <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="https://dashboard.touchworks.com.br/affiliate?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY3QiOjEsInByZCI6MTQsInBsbiI6Ik1OX1NUQU5EQVJEIiwiaXNzIjoiVFdDIiwiZXhwIjoxNzAxODMxNjAwLCJpYXQiOjE2NzAyOTU2MDB9.yODIzcYsQcY0fBf8mwWxxvk7ld9unK4nvp_BKu6j9Qo">
                                            Quero Esse
                                        </a>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
                
                
                
            </Layout>
        </>
    );
};

export default Index2;