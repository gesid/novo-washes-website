import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer className="bg-[#1C1D21] text-white bottom-0 w-full flex flex-col items-center py-6">
                <img src="../src/assets/imgs/logo_washes.png" alt="Logo" className="h-12 mb-4" />
                <p className="mb-4">Siga nossas Redes Sociais</p>
                <div className="flex space-x-6 mb-4">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaXTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p>© 2024 WASHES. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default Footer;