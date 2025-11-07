import toast from "react-hot-toast";
interface NotificationStructure{
    type: string
    message: string
}
export const showNotification = async (obj: NotificationStructure) => {
    if(obj.type===undefined){
        return;
    }
    switch (obj.type) {
        case "success":
            toast.success(obj.message);
            break;
        default:
            toast.error(obj.message);
            break;
    }
};