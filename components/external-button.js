

const ExternalButton = ({ children, onClickHandler, type = 'default' }) => {
    const buttonColorSchema = () => {
        let colorsSchema = "bg-gray-50 text-green-600 shadow-sm";

        if(type == 'success') {
            colorsSchema = "bg-green-900 text-white shadow-sm"
        }

        if(type == 'link') {
            colorsSchema = "text-gray-50"
        }

        return colorsSchema
    }

    return (
        <div className={`h-auto rounded-md p-1 mx-1 cursor-pointer text-center ${buttonColorSchema()}`} 
        onClick={onClickHandler}>
            { children }
        </div>
    )

    
}

export default ExternalButton