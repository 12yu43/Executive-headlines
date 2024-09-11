import Swal from "sweetalert2";
import './ToastMessage.css'

function Message({ type, text, title = false }) {
    if (type == "Success") {
        Swal.fire({
            text,
            iconHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 512 512" id="IconChangeColor"><title>ionicons-v5-e</title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z" id="mainIconPathAttribute" fill="#2bc48b"></path></svg>',

            customClass: {
                icon: 'no-border',
                confirmButton: 'btn px-5'
            },
            buttonsStyling: false
        })
    }

    

    if (type == "Error") {
        Swal.fire({
            text,
            icon: 'warning',
            customClass: {
                confirmButton: 'btn px-5'
            },
            buttonsStyling: false
        })
    }

    
}
export default {
    Success: (text) => Message({ type: 'Success', text }),
    Error: (text) => Message({ type: 'Error', text }),
    
}

// export default ToastMessage;