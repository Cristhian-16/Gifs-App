export const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=yAKqShAxOeO0V92o0RUcT8YaQYI7xgNa&q=${category}&limit=10`
    const res = await fetch(url)
    const { data } = await res.json()

    const gif = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gif
}