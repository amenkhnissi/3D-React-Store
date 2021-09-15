import React from 'react'
import { Typography, List, ListItem, ListItemText , Divider } from '@material-ui/core';


const PaymentForm = ({checkoutToken , Back}) => {
    return (
      <>  
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' , color :'white' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
    < Divider />
    <div className="col-md-12 mb-4 d-flex justify-content-between">
    <button type='button' onClick={()=>  Back() } className="btn btn-secondary"  >Back</button>
  <button type='submit'  className="btn btn-primary"  >Next</button>
 </div>
 
   </>
    )
}

export default PaymentForm
