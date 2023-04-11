const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/signup", async (req, res) => {
    const {username, secret, email, first_name, last_name} = req.body;

    // Store a user-copy on Chat Engine!
    try {
        const r = await axios.post(
            "https://api.chatengine.io/users/",
            {username, secret, email, first_name, last_name},
            {headers: {"Private-Key": "6a8d6ec8-be29-447a-9ba8-a2f6020fc730"}}
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.post("/login", async (req, res) => {
    const { username, secret } = req.body;

    // Fetch this user from Chat Engine in this project!
    try {
        const r = await axios.get("https://api.chatengine.io/users/me/", {
            headers: {
                "Project-ID": "65cc2353-3435-4994-ab72-29262cabd59f",
                "User-Name": username,
                "User-Secret": secret,
            },
        });
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});
app.listen(3001);