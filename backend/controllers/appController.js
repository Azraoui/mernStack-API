export const getHomePage = (req, res) => {
    console.log(req.body)
    res.status(200)
        .json({
            message: "Hello World!",
            auth: "Abdellah El Azraoui",
            age: 26
        })
};

export const setHomePage = (req, res) => {
    console.log(req.body)
    res.status(201)
        .json({
            message: "Hello World!",
            auth: "Abdellah El Azraoui",
            age: 26,
            address: req.body.address
        })
}

export const updateHomePage = (req, res) => {
    res.status(200)
        .json({
            new: req.body
        })
}

export const deleteHomePage = (req, res) => {
    console.log(`remove ${req.params.id}`)
    res.status(200)
        .json({
            status: true,
            data: {
                message: "done"
            }
        })
}
