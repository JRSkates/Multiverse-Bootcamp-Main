const hasNull = (obj) => {
    for (const key in obj) {
        if (obj[key] == null) {
            return true
        }
    }
    return false
}
