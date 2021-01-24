import MainHeaderContent from './main-header-content'
import MainHeaderLogo from './main-header-logo'

const MainHeader = () => {
    return (
        <div className="w-full h-10 bg-green-600 flex shadow-sm items-center px-3 justify-between">
            <MainHeaderLogo />
            <div className="content">
                <MainHeaderContent />
            </div>
        </div>
    )
}

export default MainHeader;