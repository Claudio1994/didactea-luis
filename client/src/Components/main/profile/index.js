/* Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Divider, IconButton, Menu, Fade, MenuItem, Button, GridList, 
    GridListTile, GridListTileBar } from '@material-ui/core';
import  MoreVertIcon  from '@material-ui/icons/MoreVert';

/* Components */
import ProductFormContainer from '../../../Containers/ProductFormContainer';
import DeletePopupContainer from '../../../Containers/DeletePopupContainer';
import PopupMessageContainer from '../../../Containers/PopupMessageContainer';

const Profile = (props) => (
    <Grid container style={{marginTop: '30px'}}>
        <Grid item xs={12} md={3} >
            <Grid container>
                <Grid container spacing={16} style={{backgroundColor: 'ghostwhite', padding: '20px', boxShadow: '1px 1px 5px'}}>
                    
                    <Grid item xs={12}>
                        <h3>Bienvenido Luis</h3>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} style={{textAlign: 'right'}}>
                            <IconButton
                            aria-label="More"
                            aria-owns={props.openProfileMenu ? 'long-menu' : undefined}
                            aria-haspopup="true"
                            onClick={props.handleClickMenu}
                            >
                                <MoreVertIcon></MoreVertIcon>
                            </IconButton>
                        </Grid>
                        <p>Nombre: Luis</p>
                        <p>Apellido: Sepúlveda</p>
                        <p>Correo: luissepulveda07@gmail.com</p>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Button className='hover' style={{color: 'purple'}} onClick={props.handleClickAddProduct} variant='outlined'>
                            Agregar producto<i style={{marginLeft: '10px'}} className="fas fa-plus-circle"></i>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <Grid item xs={false} md={1}></Grid>
        <Grid item xs={12} md={7}>
            <Grid item xs={12} style={{textAlign: 'left'}}>
                <h2>Productos</h2>
                <Divider/>

            </Grid>
            <GridList style={{marginTop: '15px'}} cellHeight={160} cols={1}>
                {props.myProducts.map((product, index) => {
                    return(
                        <GridListTile key={index} cols={1}>
                            <img src={`${product.image}`} alt={product.description}></img>
                            <GridListTileBar style={{fontWeight: 'bold'}}
                            title={product.name}
                            actionIcon={
                                <div>
                                    <Button color='primary' style={{marginRight: '5px'}} onClick={props.handleClickEdit(product)} variant='contained'>
                                    <i className="fas fa-pencil-alt"></i>
                                    </Button>
                                    <Button color='secondary' style={{marginRight: '5px'}} onClick={props.handleClickDelete(product)} variant='contained'>
                                    <i className="far fa-trash-alt"></i>
                                    </Button>
                                </div>
                            }
                            />
                            
                        </GridListTile>
                    );
                })}
            </GridList>
        </Grid>

        {/* POPUPS */}
        <Menu
        id="profile-menu"
        anchorEl={props.anchorEl}
        open={props.openProfileMenu}
        onClose={props.handleCloseMenu}
        TransitionComponent={Fade}
        >
            <MenuItem onClick={props.handleCloseMenu}>Editar</MenuItem>
            <MenuItem onClick={props.handleCloseMenu}>Cambiar contraseña</MenuItem>
        </Menu>
        <DeletePopupContainer></DeletePopupContainer>
        <ProductFormContainer></ProductFormContainer>
        <PopupMessageContainer></PopupMessageContainer>
    </Grid>
);

Profile.propTypes = {
    handleClickAddProduct: PropTypes.func.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
    handleClickEdit: PropTypes.func.isRequired,
    handleClickMenu: PropTypes.func.isRequired,
    handleCloseMenu: PropTypes.func.isRequired,
    myProducts: PropTypes.array.isRequired,
    openProfileMenu: PropTypes.bool.isRequired,
}

export default Profile;