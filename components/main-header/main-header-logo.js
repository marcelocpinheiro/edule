import MainHeader from "./main-header"
import Link from 'next/link'

const MainHeaderLogo = () => {
    return (
        <Link href={'/'}>
            <div className="text-white font-bold cursor-pointer">
                Edule
            </div>
        </Link>
        
    )
}

export default MainHeaderLogo