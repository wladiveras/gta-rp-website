export const useStoreCategory = () => {
    const currentCategory = useState<string>('store-category', () => 'home')

    const changeCategory = (category: string) => {
        console.log(category)
        currentCategory.value = category
    }

    return {
        currentCategory,
        changeCategory
    }
}
