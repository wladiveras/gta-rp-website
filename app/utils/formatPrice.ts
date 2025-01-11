export const formatPrice = (
    value: number,
    format: boolean
): string | number => {
    const formattedValue = value / 100

    if (format) {
        return formattedValue.toFixed(2).replace('.', ',')
    }
    return formattedValue
}
