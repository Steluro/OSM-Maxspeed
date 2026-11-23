
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

export default function Home() {
    return (
        <Container className="mt-3">

            <h1 className="text-center fs-4 fw-bold mb-4">
                Complétons les limitations de vitesse en France.
            </h1>

            <p className="text-center">
                OpenStreetMap est une carte collaborative. Pourtant,
                de nombreuses routes françaises ne disposent toujours
                pas d'informations sur leurs limitations de vitesse.
            </p>

            <p className="text-center mb-5">
                Notre plateforme permet de visualiser les données
                manquantes et d'aider chacun à améliorer la carte.
            </p>

            <h2 className="text-center fs-4 fw-bold mb-4">
                Pourquoi contribuer ?
            </h2>

            <p className="text-center">
                Ces données ouvertes servent à améliorer la sécurité
                routière et le routage GPS, en plus de contribuer
                à produire un socle commun de connaissances avec
                de nombreuses applications : recherche sur la conduite autonome, anticipation et
                répartition de charge du trafic routier, choix
                d'aménagements pour la mobilité douce selon les
                vitesses à proximité...
            </p>

            <p className="text-center mb-5">
                En facilitant leur consultation et leur amélioration,
                notre plateforme contribue à construire une base
                nationale ouverte, fiable et accessible à tous.
            </p>

            <Row className="justify-content-start g-3 ms-4">
                <Col xs="auto">
                    <Button
                        as={Link}
                        to="/stats"
                        variant="warning"
                    >
                        &gt;&gt; Explorer les statistiques
                    </Button>
                </Col>

                <Col xs="auto">
                    <Button
                        as={Link}
                        to="/edit"
                        variant="success"
                    >
                        ✏️ Contribuer
                    </Button>
                </Col>
            </Row>

        </Container>
    );
}
