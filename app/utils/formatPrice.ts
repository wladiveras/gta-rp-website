export const formatPrice = (
    value: number,
    format: boolean
): string | number => {
    const formattedValue = value / 100

    if (format) {
        return formattedValue.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }
    return formattedValue
}
