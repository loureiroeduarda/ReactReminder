import { Container, Grid } from "./styles";

export function StickNotes() {
    return (
        <Container>
            <div>
                <h1>Lembretes -</h1>
            </div>
            <Grid>
                <div>
                    <h2>Título</h2>
                    <p>Descrição</p>
                </div>
                <div>
                    <h2>Título</h2>
                    <p>Descrição</p>
                </div>
            </Grid>
        </Container>
    );
}