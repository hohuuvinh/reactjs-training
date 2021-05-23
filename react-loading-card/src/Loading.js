import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
const LoadingBox = styled(Skeleton)`
  margin-bottom:7px;
`;
function Loading(props) {
    return (
        <div style={{ padding: '7px' }}>
            <div style={{ paddingBottom: "50px" }}>
                <LoadingBox variant="rect" height={55} />
                <LoadingBox variant="rect" height={10} />
                <div style={{ display: 'flex' }}>
                    <LoadingBox variant="rect" height={287} width={210} style={{ marginRight: '7px' }} />
                    <LoadingBox variant="rect" height={287} width={125} />
                </div>
                <div style={{ display: 'flex' }}>
                    <LoadingBox variant="rect" height={10} width={210} style={{ marginRight: '7px' }} />
                    <LoadingBox variant="rect" height={10} width={125} />
                </div>
                <div style={{ display: 'flex' }}>
                    <LoadingBox variant="rect" height={10} width={210} style={{ marginRight: '7px' }} />
                    <LoadingBox variant="rect" height={10} width={125} />
                </div>
                <div style={{ display: 'flex' }}>
                    <LoadingBox variant="rect" height={10} width={210} style={{ marginRight: '7px' }} />
                    <LoadingBox variant="rect" height={10} width={125} />
                </div>
                <LoadingBox variant="rect" height={20} width={75} style={{ marginTop: '20px' }} />
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <LoadingBox variant="rect" height={180} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} width={120} />
                        <LoadingBox variant="rect" height={180} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} width={120} />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingBox variant="rect" height={180} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} width={120} />
                        <LoadingBox variant="rect" height={180} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} />
                        <LoadingBox variant="rect" height={10} width={120} />
                    </Grid>

                </Grid>
            </div>
            <div style={{ position: 'fixed', top: 'calc(100vh - 55px)', background: "#fff", height: '55px', width: "100%", paddingTop: '12px' }}>
                <Grid container spacing={1} style={{ paddingRight: '14px' }}>
                    <Grid item xs={3}>
                        <LoadingBox variant="rect" height={30} />
                    </Grid>
                    <Grid item xs={3}>
                        <LoadingBox variant="rect" height={30} />
                    </Grid>
                    <Grid item xs={3}>
                        <LoadingBox variant="rect" height={30} />
                    </Grid>
                    <Grid item xs={3}>
                        <LoadingBox variant="rect" height={30} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Loading;