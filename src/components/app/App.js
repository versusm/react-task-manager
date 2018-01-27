import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import '../../styles/base-styles.scss';
import router from '../../services/router';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Component: router.getCurrentScene(),
        }

    }

    render() {
        const {Component} = this.state;
        return (
            <section className="app">
                <Grid>
                    <Row>
                        <div className="app-scene">
                            <Component/>
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default App;