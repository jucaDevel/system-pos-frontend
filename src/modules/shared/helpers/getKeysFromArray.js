const getKeysFromArray = ( array ) => {
    try {
        console.log(array);
        const keys = Object.keys(array).filter((element) => element != 'id')
        return keys
    } catch (error) {
        console.log(error);
    }
}

export default getKeysFromArray