function findNaughtyStep(original, modified) {
    const maxLength = Math.max(original.length, modified.length)

    for (let i = 0; i < maxLength; i++) {
        let oriChar = original.at(i)
        let modChar = modified.at(i)
        if (oriChar !== modChar) {
            return original.length > modified.length ? oriChar : modChar
        }
    }

    return ''
}