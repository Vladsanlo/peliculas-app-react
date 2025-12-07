import { useState } from "react"

function Scifi() {

    const title = "Sci-fi"

    const name1 = "Blade Runner 2049";
    const paragraph1 = html`<strong>${this.name1}</strong>, Dirigida por Denis Villeneuve, esta secuela de "Blade Runner" profundiza en temas de identidad, inteligencia artificial y el futuro de la humanidad, con un mundo distópico visualmente impresionante.`;
    const img1 = "https://seeklogo.com/images/B/blade-runner-logo-86666C6A07-seeklogo.com.png"

    return (
        <div>
            <h1>{title}</h1>

            <p1>{name1}</p1>
            <p1>{paragraph1}</p1>
            <img src={img1} />
        </div>
    );
}

export default Scifi