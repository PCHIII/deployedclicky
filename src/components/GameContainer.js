import React, { Component } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import picturesJson from "../pictures.json";
import PictureCard from "./PictureCard";
import Footer from "./Footer/Footer";

class GameContainer extends Component {
    state = {
        currentScore: 0,
        topScore: 0,
        pictures: []
    }

    componentWillMount() {
        const pictures = this.shuffle(picturesJson);
        this.setState({ pictures });
    }

    // randomize shuffle
    shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // elements to shuffle...
        while (0 !== currentIndex) {

            // pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // switch with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Reloads page and randomizes picture order when clicking "Start Game" button
    resetGame = () => {
        console.log("reloaded!");
        let pictures = [...this.state.pictures];
        pictures.forEach(picture => picture.clicked = false);
        pictures = this.shuffle(pictures);
        this.setState({
            currentScore: 0,
            pictures
        })
    };

// render lose

    handlePictureClick = id => {
        if (!this.state.pictures[id].clicked) {
            console.log(id);
            let pictures = [...this.state.pictures];
            pictures[id].clicked = true;
            console.log(pictures[id]);
            pictures = this.shuffle(pictures);
            this.setState({
                pictures,
                currentScore: this.state.currentScore + 1,
                topScore: this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore
            });
        } else {
            alert("You already clicked her, please try again.");
            this.resetGame();
        }

    }

    // show win alert
    renderWinMessage = () => {
        if (this.state.topScore === 12) {
           
                alert("You win!")
             
        }
    }

// show score calculations in header
    render() {
        return (
            <div>
                {/* Renders scores and reload function in header */}
                <Header 
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    resetGame={this.resetGame}
                />
                <Jumbotron />
                {this.state.pictures.map((picture, i) => <PictureCard
                    image={picture.image}
                    key={picture.id}
                    id={i}
                    onClick={this.handlePictureClick}
                />)}
            <Footer/>
            </div>
        );
    }
}
export default GameContainer;