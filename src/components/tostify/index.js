import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MdCheckCircle } from 'react-icons/md';

export const errortoast = ({message}) => {
    return toast.error(message || "Something Went Wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export const successtoast = ({message}) => {

    return toast.success(message || "Something Went Wrong",
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",        
            // bodyClassName: "text-lg font-bold bg-black",
            // icon:false
        });
}

// import { toast } from 'react-toastify';
// import { MdCheckCircle } from 'react-icons/md';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure({
//   success: {
//     icon: <MdCheckCircle style={{ color: 'orange' }} />,
//   },
// });

// toast.success('Success message!');