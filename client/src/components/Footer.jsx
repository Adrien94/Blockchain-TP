import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flew flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32"/>
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Marché</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Echange</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Tutos</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-small text-center">Merci et bonne correction !</p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"/>
        </div>
    );
}

export default Footer;