const getKeysFromArray = ( array = [] ) => {
    try {
        const keys = Object.keys(array).filter((element) => element != 'id')
        return keys
    } catch (error) {
        console.log(error);
        return []
    }
}

export default getKeysFromArray