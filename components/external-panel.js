export default function ExternalPanel({children, title = ""}) {
    return (
        <div className="w-1/2 h-auto bg-green-600 rounded-md p-6">
            <div className="text-white font-bold text-lg">
                { title }
            </div>
            { children }
        </div>
    )
}