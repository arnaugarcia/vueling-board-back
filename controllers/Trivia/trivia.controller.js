getGames = async (req, res) => {
    try {
        const games = await getGames();
        return res.status(200).json(games);
    } catch (error) {
        return res.status(500).json({message: 'Error al obtener los juegos', error});
    }
}
