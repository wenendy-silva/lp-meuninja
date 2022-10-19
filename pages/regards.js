import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const Regards = () => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        <>
            <Layout>
                <section className="pt-20 pb-32">
                    <div className="container text-center">
                        <img className="mb-4 mx-auto md:max-w-md mb-12 wow animate__animated animate__fadeIn" src="/assets/imgs/illustrations/thankyou.png" alt="Touchworks" />
                        <span className="text-4xl text-blue-500 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">Obrigado</span>
                        <h2 className="mb-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">Sua inscrição está confirmada</h2>
                        <p className="mb-6 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Você pode cancelar a qualquer momento pelo link da página.</p>
                        <div>
                            <Link href="https://api.whatsapp.com/send?phone=5511991930623&text=Oi"><a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center bg-green-500 font-semibold leading-none bg-blue-400 hover:bg-blueGreen-50 rounded wow animate__animated animate__fadeIn" data-wow-delay=".5s">Veja mais no WhatsApp</a></Link>
                            <Link href="/"><a className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded wow animate__animated animate__fadeIn" data-wow-delay=".6s">Voltar para o inicio</a></Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Regards;