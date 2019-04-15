/* Libraries */
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class NotFound404 extends Component {
    render(){
        return(
            <div>
                <Grid container spacing={8} style={{marginTop: '30px'}}>
                    <Grid item xs={12}>
                        <h4 style={{textAlign: 'center'}}>La página no ha sido encontrada</h4>
                        <p style={{textAlign: 'center'}}>Compruebe que la url sea correcta</p>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <div style={{width:'100%',height:'0',paddingBottom:'84%',position:'relative'}}>
                            <img src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif" alt="gif no se ha encontrado pagina" width="100%" height="100%"
                            style={{position:'absolute'}}>
                            </img>
                        </div>
                        
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}

export default NotFound404;