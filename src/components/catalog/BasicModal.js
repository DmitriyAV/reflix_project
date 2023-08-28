import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from "react";
import {CardMedia} from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({show, close, title}) {

    const [giphy, setGiphy] = useState(null)


    const fetchMovieGif = () => {
        const api_key = "NjQjqYxuRKXNyE9dbjyHmq3JfQNe3neA"
        const url = `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${api_key}&limit=5`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                const movieGif = data.data[0];

                if (movieGif) {
                    return movieGif.embed_url;
                } else {
                    return null;
                }
            })
            .catch(error => {
                console.error("Error fetching movie gif:", error);
            });
    };

    return (
        <>
            {show ? (
                <>
                    <Button onClick={() => close()}>Open modal</Button>
                    <Modal
                        open={show}
                        onClose={close()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {title}
                            </Typography>
                            {giphy && <CardMedia image={ () => fetchMovieGif()}></CardMedia>}
                        </Box>
                    </Modal>
                </>
            ) : null}

        </>
    );
}
