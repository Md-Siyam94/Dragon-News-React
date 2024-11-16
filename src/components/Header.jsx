import moment from 'moment';
import HeaderLogo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4'>
            <div >
                <img className='w-[400px] ' src={HeaderLogo} alt="" />
            </div>
            <p className='py-2 font-semibold opacity-60 '>Journalism Without Fear or Favour</p>
            <div className='flex items-center gap-1 opacity-80 font-semibold'>
                <p>{moment().format("dddd")}</p>
                <p className='opacity-60'>{moment().format(", MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;