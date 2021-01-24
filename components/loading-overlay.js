import { useRecoilValue } from "recoil";
import { loadingState } from "./states";
import ReactLoading from 'react-loading';

export default function LoadingOverlay() {
    const loading =  useRecoilValue(loadingState);

    return (
        loading && <div className="absolute w-full h-full bg-gray-500 opacity-50 flex items-center justify-center">
            <ReactLoading type="spin"/>
        </div>
    )
}