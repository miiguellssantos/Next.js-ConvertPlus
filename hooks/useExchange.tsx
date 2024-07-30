export default async function useExchange(code: string){
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/6f79d8d937fed48cdc183c7e/latest/${code}`);
        return response.json()
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error if needed
    }
    } 