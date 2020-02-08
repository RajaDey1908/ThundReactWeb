export const updateObjects=(oldOject, updatedValues)=>{
    return{
        ...oldOject,
        ...updatedValues
    }
}