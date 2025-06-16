import React, { useState, useEffect } from 'react';
import { getAllMovies } from '../services/movieService';
import { Container, Card, Button } from 'react-bootstrap';

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllMovies()
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch movies:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading movies...</p>;
    }

    return (
        <Container>
            <h1>Movies</h1>
            <div className="d-flex flex-wrap">
                {movies.map(movie => (
                    <Card key={movie.id} style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>
                                Genre: {movie.genre} <br />
                                Rating: {movie.rating}
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
