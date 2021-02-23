import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {
    state = {
        isShow: true
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                isShow: !state.isShow
            }
        })
    }

    render() {
        const randomChar = this.state.isShow ? <RandomChar /> : null

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row className='random-char'>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar}
                        </Col>
                    </Row>
                    <button className="toggle" onClick={this.toggleRandomChar}>Toggle random char</button>
                    <Row className="mt-5">
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
}