function formatError(error:any){
    if(error instanceof Error){
        return error.message;
    }else if(error.response && error.response.message){
        return error.response.message
    }
}


export default formatError;