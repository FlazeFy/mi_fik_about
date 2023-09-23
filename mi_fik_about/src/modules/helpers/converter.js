export const getRemoveSpaces = (val) => {
    try {
        const res = val.replaceAll(' ', '')
        
        return res
    } catch (error) {
        throw error
    }
};