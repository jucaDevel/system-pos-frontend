const getKeysFromArray = ( array = [] ) => {
    try {
        const keys = Object.values(array).map((element) => element.name)
        return keys
    } catch (error) {
        console.log(error);
        return []
    }
}

export default getKeysFromArray