
import styled from "styled-components";

export default function Error() {
    return (
        <>
            <div className="error">
                <h1>Error</h1>
                <h2>404</h2>
                <p>Not Found</p>
            </div>
        </>

    );

}

const Estilos = styled.html`

#error{
    margin: 0 auto;
    box-shadow: 0 5px 5px #ff0000;
    
}
`