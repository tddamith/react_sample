import {IoMdClose} from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
export const GetIcon = (_iconType) => {

    switch (_iconType) {
        case "close":
            return <IoMdClose />;
        case "close-circle":
            return <IoMdCloseCircleOutline />;
        default:
            return "<icon>";
    }


}
