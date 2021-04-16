import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

const BuyContainer = ({title, imgArray, buyWindow}) => {
    const [pointer,setPointer] = useState(0)
    return <Grid container alignItems='center'>
        <h1>title</h1>
        <Grid md item>
            {imgArray[0]}            
        </Grid>
        <Grid md item>
            {<MensButton/>}          
        </Grid>
    </Grid>

}

export default BuyContainer


const MensButton = () => (<>
    <h3 style={{ textAlign: 'center' }}>Men's Tee</h3 >

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" defaultValue="_xclick" />
        <input type="hidden" name="business" defaultValue="GUEYYY9M5UJSN" />
        <input type="hidden" name="lc" defaultValue="US" />
        <input type="hidden" name="item_name" defaultValue="Vulnerability is the New Sexy Men's T-Shirt" />
        <input type="hidden" name="amount" defaultValue={25.00} />
        <input type="hidden" name="currency_code" defaultValue="USD" />
        <input type="hidden" name="button_subtype" defaultValue="services" />
        <input type="hidden" name="shipping" defaultValue="4.25" />
        <input type="hidden" name="bn" defaultValue="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
        <table>
            <tbody><tr><td><input type="hidden" name="on0" defaultValue="Size" />Size</td></tr><tr><td><select name="os0">
                <option value="Small">Small </option>
                <option value="Medium">Medium </option>
                <option value="Large">Large </option>
            </select> </td></tr>
                <tr><td><input type="hidden" name="on1" defaultValue="Color" />Color</td></tr><tr><td><select name="os1">
                    <option value="Black">Black </option>
                    <option value="Brown">Brown </option>
                </select> </td></tr>
            </tbody></table>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
    </form>

</>)