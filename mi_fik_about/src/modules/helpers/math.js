export const getAgeFromBirthDate = (val) => {
    try {
        const birthDate = new Date(val)
        const currentDate = new Date()
        let res

        const yearDiff = currentDate.getFullYear() - birthDate.getFullYear()
        const monthDif = currentDate.getMonth() - birthDate.getMonth()
        const dayDif = currentDate.getDate() - birthDate.getDate()

        if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
            res = yearDiff - 1
        } else {
            res = yearDiff
        }
        return <b className="imp">{res} y.o</b>
    } catch (error) {
        throw error
    }
};
