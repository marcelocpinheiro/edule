export default function ExternalInput({ 
    onChangeHandler, 
    placeholder = "",
    type = 'text',
    label}) {

    return (
        <div className="w-full flex flex-col">
            <label className="text-gray-50">{ label }</label>
            <input type={type} placeholder={placeholder} className="h-10 rounded-md px-3" onChange={event => onChangeHandler(event.currentTarget.value)}></input>
        </div>
    )


}