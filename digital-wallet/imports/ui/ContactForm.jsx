import React from "react";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {
        setName("");
        setEmail("");
        setImageUrl("")
    }
        return (
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        id='name'
                        onChange={(e) => setName(e.target.value)}
                        type="text">
                    </input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email" >
                    </input>
                </div>
                <div>
                    <label htmlFor="imageUrl">Image Url</label>
                    <input
                        value={imageUrl}
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        id="imageUrl">
                        </input>
                </div>
                <div>
                    <button type="button" onClick={saveContact} >Save Contact</button>
                </div>
            </form>
        )
}