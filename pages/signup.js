import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const Signup = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        <>
            <Layout>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container">
                        <div className="text-center mb-8">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                                <span>Tenha um </span>
                                <br />
                                <span className="text-blue-600">Ninja </span>
                                <span>para organizar sua agenda.</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-sm text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                Você está muito perto de evoluir seu negócio com uma das nossas soluções de atendimento.
                            </p>
                        </div>
                        <div className="container">
                        <form id="sib-form" method="POST" action="https://472ab188.sibforms.com/serve/MUIEANU8x61THW2ZozTwl8R6wy2U_LEH28R3uvJVGdOfCuwGOhqfbeNio5R-9OrT4B0mOEZslTQKm26eHYiFrR9UMvC9mn0s0pk0U2qTuEFoeSilHfzyi9Kki5LTXlJt7g4mewjhrRuSI_UL8vyWPN3pLEJrhBznrg2BuNHlhlaltVmRukdD_UqHxadv_A_p7jv94T2fHUahdtV5" data-type="subscription">
                            <div className="flex flex-wrap -mx-8">
                                <div className="w-full lg:w-1/2 px-8">
                                    <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                        <h2 className="my-4 text-xl font-semibold" data-wow-delay=".1s">
                                            Preencha o formulário abaixo e converse com nosso time comercial.
                                        </h2><br />
                                        <h2 className="my-4 text-blue-500 font-semibold" data-wow-delay=".1s">
                                            Informações de Contato
                                        </h2>
                                        <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                                            <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="text" id="NOME" name="NOME" autocomplete="off" data-required="true" placeholder='Seu Nome' required />
                                            <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                                            <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" placeholder="email@email.com" type="text" id="EMAIL" name="EMAIL" autocomplete="off" data-required="true" required/>
                                            <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                            </svg>
                                        </div>
                                        <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
                                            
                                            <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="text" id="TELEFONE" name="TELEFONE" autocomplete="off" data-required="true" placeholder='55119123456789' required  />
                                            <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <br />
                                        <h2 className="my-2 text-blue-500 font-semibold" data-wow-delay=".1s">
                                            Sobre sua empresa
                                        </h2>
                                        <h3 className="my-4 text-gray-400 leading-loose" data-wow-delay=".1s">
                                            Utilizamos essas informações para chegarmos juntos ao plano ideal
                                        </h3>
                                        <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                                            <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="text" id="AREA" name="AREA" autocomplete="off" data-required="true" placeholder="Qual área de atuação?" required/>
                                            <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                            </svg>
                                        </div>
                                        <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                                            <input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" type="text" id="SITE" name="SITE" autocomplete="off" placeholder="Qual seu site?" />
                                            <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="float-left mb-1 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                            <label className="inline-flex text-xs" for="POLITICAS" data-required="*">
                                                <input type="checkbox" className="form-checkbox" value="1" id="POLITICAS" name="POLITICAS" required />
                                                <span className="ml-2">
                                                    Concordo com a {" "}
                                                    <Link href="https://dashboard.touchworks.com.br/termsandprivacy">
                                                        <a className="underline hover:text-blueGray-500">Política de Privacidade Touchworks.</a>
                                                    </Link>{" "}
                                                    e{" "}
                                                    <Link href="https://dashboard.touchworks.com.br/termsandprivacy">
                                                        <a className="underline hover:text-blueGray-500">Termos de uso</a>
                                                    </Link>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="float-left mb-4 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                            <label className="inline-flex text-xs" for="NEWS" data-required="*">
                                                <input type="checkbox" className="form-checkbox" value="1" id="NEWS" name="NEWS" />
                                                <span className="ml-2">
                                                    Aceito receber conteúdos sobre tecnologia, bots, comunicações de eventos, novidades e notícias pelo WhatsApp* {" "}
                                                </span>
                                            </label>
                                        </div>
                                        
                                        <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" form="sib-form" type="submit">Falar com especialista</button>
                                    </div>
                                    <input type="text" name="email_address_check" value="" class="input--hidden"></input>
                                    <input type="hidden" name="locale" value="pt"></input>
                                </div>
                                <div className="w-full lg:w-1/2 px-10">
                                    <h2 className="my-2 text-xl  text-blue-500 font-bold" data-wow-delay=".1s">
                                        Mais que mensagens automáticas.
                                    </h2>
                                    <h3 className="my-4 text-gray-400 leading-loose" data-wow-delay=".1s">
                                        Garanta um contato inteligente no canal digital favorito do seu cliente.
                                    </h3>
                                    <ul className="space-y-12">
                                        <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="px-4">
                                                <div className="w-8 mr-1 text-blue-500">
                                                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="px-4">
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Flexibilidade</h3>
                                                <p className="text-blueGray-400 leading-loose">Atenda com agilidade a qualquer hora do dia.</p>
                                            </div>
                                        </li>
                                        <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="px-4">
                                                <div className="w-8 mr-1 text-blue-500">
                                                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="px-4">
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Crescimento</h3>
                                                <p className="text-blueGray-400 leading-loose">Amplie suas vendas nos principais canais digitais</p>
                                            </div>
                                        </li>
                                        <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="px-4">
                                                <div className="w-8 mr-1 text-blue-500">
                                                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="px-4">
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Satisfação</h3>
                                                <p className="text-blueGray-400 leading-loose">Deixe seu cliente mais feliz com um atendimento rápido e humanizado.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <h2 className="my-12 text-xl  text-black-500 font-bold" data-wow-delay=".1s">
                                        Converse com nosso time pelo WhatsApp e descubra como conversas inteligentes podem transformar o atendimento do seu negócio.
                                    </h2>
                                    <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 text-xs bg-green-500 text-white font-semibold leading-none border border-gray-200 hover:bg-blueGreen-50 rounded" href="https://api.whatsapp.com/send?phone=5511991930623&text=Falar%20com%20especialista">
                                    <img className="h-6 pr-3" src="/assets/imgs/logos/whatsapp-trans-rev1.svg" />
                                    <span>Converse Pelo WhatsApp</span>
                                </button>
                                </div>
                                
                            </div>
                       </form>
                       </div>                     
                    </div>
                </section>
                

            
            </Layout>
        </>
    );
};

export default Signup;