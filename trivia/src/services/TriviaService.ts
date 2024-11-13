//https://opentdb.com/api.php?amount=10

export async function getTrivia(amount: number) {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}`)
        return response.json()
    }
    catch(error) {
        console.error(error);
        return undefined;
    }
}