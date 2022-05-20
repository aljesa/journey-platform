import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';




export default function NewsList() {
    const [newsList, fetchNewsList] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getData = () => {
        fetch('http://localhost:5296/api/News')
            .then((res) => res.json())
            .then((res) => {
                fetchNewsList(res)
            }).catch((error) => console.log('error', error))
    }

    useEffect(() => {
        getData()
    }, []);
    const columns = [
        { field: 'NewsId', headerName: 'ID', width: 70 },
        { field: 'NewsTitle', headerName: 'Title', width: 250 },
        { field: 'NewsDescription', headerName: 'Description', width: 250 },
        { field: 'NewsCategory', headerName: 'Category', width: 250 },
        { field: 'DateOfPosting', headerName: 'Date', width: 250 },

    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 1,
    };
    return (
        <div style={{ height: 500, width: '100%' }} className="table-wrapper">
            <Grid container spacing={3} alignItems="flex-end" direction="row">
                <Grid item xs={10} className="mb-5">
                    <h2>News</h2>
                </Grid>
                <Grid item xs={2} className='mb-5'>
                    <Button variant="contained" size="medium" onClick={handleOpen}>
                        Add item
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3 text-center text-uppercase fw-bold'>
                                Create new nav link
                            </Typography>
                        </Box>
                    </Modal>
                </Grid>
            </Grid>
            <DataGrid
                rows={newsList}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row.NewsId}
                checkboxSelection
            />

        </div>

    );
}