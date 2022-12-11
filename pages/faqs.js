import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/layout/Layout';
import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Faqs = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        <>
            <Layout>
                <section className="pt-12 pb-20 lg:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: 'url("assets/imgs/backgrounds/intersect.svg")' }}>
                <h2 className="max-w-lg mx-auto mb-2 text-4xl text-blueGray-500 font-heading wow animate__animated animate__fadeIn animated">
                                <span> Tire suas dúvidas </span>
                            </h2>
                    <div className="container">
                        <img className="mx-auto sm:max-w-sm mb-10 wow animate__animated animate__fadeIn" data-wow-delay=".1s" src="assets/imgs/illustrations/eating.svg" alt="Touchworks" />
                        
                            <br/>
                        <div className="flex flex-wrap justify-between -mx-3 mb-12">
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">O que é Juri?</h4>
                                    <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">O Juri é o assistente virtual que pode ser conectado ao seu Astrea ou Saj Adv para atender de forma automatizada as solicitações dos clientes através do WhatsApp, Instagram e Facebook Messenger.</p>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Como funciona?</h4>
                                    <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">Através da API oficial de negócios do WhatsApp, nós conectamos o seu sistema de gestão processual no número do seu escritório, assim seu cliente pode ter um atendimento rápido e eficiente, 24h por dia.</p>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Como Testar?</h4>
                                    <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">Para começar a evolução do seu escritório é muito simples, faça o cadastro e um de nossos especialistas criará um número de teste para que você conheça o sistema e suas funcionalidades. </p>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                <div className="p-6 bg-white rounded shadow">
                                    <div className="text-blue-500 mb-4">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <h4 className="mb-3 font-bold font-heading">Preciso de um número novo?</h4>
                                    <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">Você não precisa ter um novo número de telefone para utilizar os serviços que o Juri proporciona, seu número atual será o mesmo utilizado na API oficial do WhatsApp.</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex-1 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="px-4 mx-auto lg:ml-0">
                                    <h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeIn">Dúvidas Frequentes</h3>
                                    <div>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Eu perco meu histórico de conversas?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>                                                    
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                                                    Sim, ainda não é possível migrar o histórico de conversas para a Inbox (Sistema de atendimento). 
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Posso importar minha agenda de contatos?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">Sim, por meio de um arquivo .CSV é possível importar todos os dados dos seus contatos ou leads de uma só vez. </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Vou continuar acessando pelo WhatsApp meu número?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">Não, a partir da ativação do número, você poderá acessá-lo apenas pela plataforma Touch ou mobile.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Vocês têm aplicativo para celular?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">Não, porém o acesso pode ser feito de forma totalmente adaptada para o navegador do seu celular, sendo totalmente dispensável a necessidade de aplicativos.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Posso cancelar e voltar usar no WhatsApp Business?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">Caso não esteja satisfeito com a plataforma você poderá cancelar seu uso, porém por regras do Facebook ele não poderá ser utilizado novamente no seu Whatsapp regular por pelo menos 30 dias.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>O que é gerenciador de negócios do Facebook?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">É uma ferramenta da Meta para administrar em um único lugar as redes sociais do grupo, como: WhatsApp, Instagram e Facebook.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Terei o selo de verificação do WhatsApp?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">Essa validação e liberação é feita pelo WhatsApp de acordo com os critérios de avaliação interna, a Touch não oferece essa verificação.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                        <span>Preciso ter um site?</span>
                                                        <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="text-gray-700 text-sm mt-2">Sim e este site precisa ter domínio próprio da empresa, de acordo com a política de uso do WhatsApp Business.</Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
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
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="https://dashboard.touchworks.com.br/signup">
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
            </Layout>
        </>
    );
};

export default Faqs;