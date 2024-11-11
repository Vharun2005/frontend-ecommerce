const apiRequest = async(URL="",optionsObj=null,errorMsg=null) => {
    try{
        const fetchItems = await fetch(URL,optionsObj)
        if(!fetchItems.ok){
            throw Error('please Reload website')
        }
    }catch(err){
        errorMsg=err.message

    }finally{
        return errorMsg
    }
}
export default apiRequest