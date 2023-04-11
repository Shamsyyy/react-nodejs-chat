import { useState } from "react";

import AuthPage from "./authPage.jsx";
import ChatsPage from "./chatsPage.jsx";

function App() {
    const [user, setUser] = useState();

    if (!user) {
        return <AuthPage onAuth={(user) => setUser(user)} />;
    } else {
        return <ChatsPage user={user} />;
    }
}

export default App;