import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/layout/Layout';
import TextEffect from "../components/elements/TextEffect"

const About = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        <>
            <Layout>
            <section className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24" style={{"backgroundImage":"url('assets/imgs/backgrounds/intersect.svg')"}}>
                    <div className="hidden md:block absolute top-0 left-0 mt-32">
                        <img className="h-64 lg:h-80 jump" src="/assets/imgs/illustrations/at_the_park.svg" alt="Touchworks" />
                    </div>
                    <div className="hidden md:block absolute top-0 right-0 mt-32">
                        <img className="h-64 lg:h-80 jump" src="/assets/imgs/illustrations/delivered.svg" alt="Touchworks" />
                    </div>
                    <div className="container">
                        <div className="mt-12 mb-12">
                            <div className="max-w-lg mx-auto mb-8 text-center">
                                <h2 className="text-3xl md:text-5xl mt-4 mb-4 font-bold font-heading">
                                    <span>Nós acreditamos na  </span>
                                    <span className="text-blue-600">Colaboração </span>
                                    <span>para o sucesso.</span>
                                </h2>
                                <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">A inovação e <strong className="text-blue-500">tecnologia</strong> está no nosso sangue. <span className="typewrite d-inline text-brand" data-period="300" data-type='["Não fazemos bots", "Criamos histórias" ]'>                                    
                                <TextEffect text1="Não fazemos bots" text2="Criamos histórias"/>
                                </span></p>
                            </div>
                            <form id="sib-form" method="POST" action="https://472ab188.sibforms.com/serve/MUIEAGlKCbQNa9SIvYwApocG3PeKOBR06iv_JMA7yhDvfOB2DDI1D8feH5F8zhjFXN8GoT1O8IxOe3xmw_XBjIaykbzl4q1uC27BwoT0F8Bjlz27lJLBemvH3jqTBaWgHRHuxaKIz0djkcBwwu-s_1y6b-xAKSHAxFfJ_TQ4yH2F6NOOXn-GnBusSsdElXoQ0Pt10E3u3fXaxCsQ">
                            <div className="max-w-2xl mx-auto text-center">
                                <div className="flex flex-wrap">
                                    <div className="flex flex-1 mb-4 lg:mr-4 px-4 rounded bg-blueGray-50">
                                        <svg className="h-6 w-6 my-auto mr-4" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg>
                                        <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" data-required="true" id="EMAIL" name="EMAIL" autocomplete="off" type="text" placeholder="Digite seu e-mail" />
                                    </div>
                                    <div className="w-full lg:w-auto">
                                        <button className="block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" form="sib-form" type="submit">Assinar Newsletter</button>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pb-4">
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-1.png" alt="Touchworks" />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Touchworks" />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-3.png" alt="Touchworks" />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-4.png" alt="Touchworks" />
                            </div>
                            <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                <img className="mx-auto" src="/assets/imgs/logos/brands/brand-5.png" alt="Touchworks" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50">
                    <div className="container">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="flex flex-wrap lg:max-w-sm mx-auto">
                                <img className="jump sm:max-w-sm lg:max-w-full mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s" src="/assets/imgs/illustrations/tasks.svg" alt="Touchworks" />
                            </div>
                            
                            <div className="w-full lg:w-auto">
                                <div className="lg:pl-32">
                                    <div className="mb-4">
                                    <br/><br/>
                                    <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">Somos Touch</span>
                                        <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s"></h2>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Visão</h3>
                                            <p className="text-blueGray-400 leading-loose">No code, no stress.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Propósito</h3>
                                            <p className="text-blueGray-400 leading-loose">A solução certa para cada momento.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Touch</h3>
                                            <p className="text-blueGray-400 leading-loose">A chave para qualquer empresa crescer e se destacar, está em sua capacidade de atender bem seus clientes e isso só é possível com muita inteligencia e principalmente conhecimento, a Touch oferece todas as ferramentas para que as empresas tenha em suas mãos o controle total do seu atendimento, desde a captação ao pós-venda, por que ter várias ferramentas se em apenas um Touch você pode ter todas?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section class="py-20 bg-blueGray-50 items-center">
                <div class="container">
                    <div class="max-w-lg mx-auto mb-12 ">
                        
                        <div class="flex items-center ">
                                    <img class="h-16 w-16 rounded-full object-cover" src="assets/imgs/placeholders/baixados.png" alt="wenendy" />
                                    <div class="pl-4">
                                        <p class="text-lg font-bold">Wenendy Silva</p>
                                        <p class="text">Co-Fundador e CEO - <strong className="text-blue-500">Touchworks</strong> </p>
                                        <p class="leading-loose text-blueGray-400 mb-5 text-sm">O mundo é movido por conversas e as pessoas precisam conversar com as empresas assim como conversam com um conhecido. Estamos transformando isso em realidade.</p>
                                    </div>
                                </div>
                    
                    
                    
                   
                    </div>
                </div>
            </section>
                
            </Layout>
        </>
    );
};

export default About;