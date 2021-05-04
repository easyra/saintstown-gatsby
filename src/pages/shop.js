import { Grid, Icon, IconButton } from "@material-ui/core"
import React, { useState } from "react"
import StyledButton from "../components/@shared/StyledButton"
import StyledPaper from "../components/@shared/StyledPaper"
import StyledSection from "../components/@shared/StyledSection"
import Layout from "../components/Layout"
import BuyContainer from "../components/ShopContainer/BuyContainer"
import shirt01 from '../img/shirt01.jpg'
import shirt02 from '../img/shirt02.jpg'
import shirt03 from '../img/shirt03.jpg'
import shirt04 from '../img/shirt04.jpg'
import shirt05 from '../img/shirt05.jpg'
import shirt06 from '../img/shirt06.jpg'
import shirt07 from '../img/shirt07.jpg'
import shirt08 from '../img/shirt08.jpg'
import shirt09 from '../img/shirt09.jpg'
import shirt10 from '../img/shirt10.jpg'
import shirt11 from '../img/shirt11.jpg'
import shirt12 from '../img/shirt12.jpg'
import shirt13 from '../img/shirt13.jpg'
import shirt14 from '../img/shirt14.jpg'
import shirt15 from '../img/shirt15.jpg'
import shirt16 from '../img/shirt16.jpg'
import shirt17 from '../img/shirt17.jpg'
import shirt18 from '../img/shirt18.jpg'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default () => {
    const [pointer, setPointer] = useState(0)
    const shirtArr = [shirt01,shirt12,shirt13, shirt17,shirt09,shirt18,shirt10,shirt11, shirt02,shirt08, shirt03, shirt04, shirt05, shirt06,shirt14,shirt15,shirt16 ]
    const handleClick = (inc = 1) => {
        setPointer(state => {
            if (inc) {
                if (state < shirtArr.length - 1) {
                    return ++state
                } else {
                    return 0
                }
            } else {
                if (state > 0) {
                    return --state
                } else {
                    return shirtArr.length - 1
                }
            }
        })
    }
    return (
        <Layout>
            <StyledPaper style={{ margin: ' auto ', padding: '25px 15px' }}>
                <h1 style={{ textAlign: 'center', lineHeight: 1.6, fontFamily: '' }}><span style={{ background: 'red', padding: "5px 10px", marginBottom: 10, fontFamily: 'inherit' }}>VULNERABILITY</span><br />THE NEW SEXY</h1>
            </StyledPaper>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12} md={4} >

                    <img onClick={handleClick} src={shirtArr[pointer]} style={{ width: '100%', minWidth: 250, maxWidth: 750, padding: 25, height: 750 , objectFit:'contain', cursor:'pointer'}} />
                    <Grid container justify='center'>
                        <Grid item>
                              <IconButton onClick={() => handleClick(false)}>
                            <NavigateBeforeIcon  />
                        </IconButton>
                        <IconButton onClick={() => handleClick(true)} >
                            <NavigateNextIcon/>
                        </IconButton>
                        </Grid>
                      
                    </Grid>

                </Grid>
                <Grid item xs={12} md={4}>

                    <Grid container>
                        <StyledPaper style={{ width: 'min-content', margin: ' 15px auto', padding: '15px' }}>
                            <MensButton />
                        </StyledPaper>
                        <StyledPaper style={{ width: 'min-content', margin: ' 15px auto', padding: '15px' }}>
                            <WomensButton />
                        </StyledPaper>
                        <StyledPaper style={{ width: 'min-content', margin: ' 15px auto', padding: '15px' }}>
                            <HoodieButton />
                        </StyledPaper>
                        <StyledPaper style={{ width: 'min-content', margin: ' 15px auto', padding: '15px' }}>
                            <HatsButton />
                        </StyledPaper>
                        <StyledPaper style={{ width: 'min-content', margin: ' 15px auto', padding: '15px' }}>
                            <CrewButton />
                        </StyledPaper>
                        {/* <StyledPaper style={{ ma */}
                    </Grid>

                </Grid>
            </Grid>

            {/* <BuyContainer title="Men's Tee" imgArray={<img src={shirt01} style={{ width: '100%', minWidth: 250, maxWidth: 750, padding: 25 }} />} buyWindow={MensButton} /> */}

        </Layout>
    )
}

const HatsButton = () => (
    <>
    <h3 style={{ textAlign: 'center' }}>Hats</h3 >
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Colors" />Colors</td></tr><tr><td><select name="os0">
            <option value="Camo Green">Camo Green </option>
            <option value="Black">Black </option>
            <option value="Gray">Gray </option>
          </select> </td></tr>
    </tbody></table>
  <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----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-----END PKCS7-----" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>



    </>
)

const CrewButton = () => (
    <>
        <h3 style={{ textAlign: 'center' }}>Crewneck Sweaters</h3 >

        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Lavender">Lavender </option>
            <option value="Black">Black </option>
          </select> </td></tr>
      <tr><td><input type="hidden" name="on1" defaultValue="Size" />Size</td></tr><tr><td><select name="os1">
            <option value="Small">Small </option>
            <option value="Medium">Medium </option>
            <option value="Large">Large </option>
            <option value="X-Large">X-Large </option>
            <option value="XX-Large">XX-Large </option>
          </select> </td></tr>
    </tbody></table>
  <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----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-----END PKCS7-----" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>

    </>
)

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

const WomensButton = () => (<>
    <h3 style={{ textAlign: 'center' }}>Women's Tee</h3 >
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" defaultValue="_xclick" />
        <input type="hidden" name="business" defaultValue="GUEYYY9M5UJSN" />
        <input type="hidden" name="lc" defaultValue="US" />
        <input type="hidden" name="item_name" defaultValue="Vulnerability is the New Sexy Women's T-Shirt" />
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
                    <option value="Lavender">Lavender </option>
                    <option value="Dark Grey">Dark Grey </option>
                    <option value="Hunter Green">Hunter Green </option>
                    <option value="Mustard Yellow">Mustard Yellow </option>
                </select> </td></tr>
            </tbody></table>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
        {/* <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} /> */}
    </form></>)

const HoodieButton = () => (<>
    <h3 style={{ textAlign: 'center' }}>Hoodies</h3 >

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" defaultValue="_xclick" />
        <input type="hidden" name="business" defaultValue="GUEYYY9M5UJSN" />
        <input type="hidden" name="lc" defaultValue="US" />
        <input type="hidden" name="item_name" defaultValue="Vulnerability is the New Sexy Hoodies" />
        <input type="hidden" name="amount" defaultValue={65.00} />
        <input type="hidden" name="currency_code" defaultValue="USD" />
        <input type="hidden" name="button_subtype" defaultValue="services" />
        <input type="hidden" name="shipping" defaultValue="4.25" />
        <input type="hidden" name="bn" defaultValue="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
        <table>
            <tbody><tr><td><input type="hidden" name="on0" defaultValue="Size" />Size</td></tr><tr><td><select name="os0">
                <option value="Small">Small </option>
                <option value="Medium">Medium </option>
                <option value="Large">Large </option>
                <option value="Extra Large">Extra Large </option>
            </select> </td></tr>
                <tr><td><input type="hidden" name="on1" defaultValue="Color" />Color</td></tr><tr><td><select name="os1">
                    <option value="Camo Green">Camo Green </option>
                    <option value="Camo Beige">Camo Beige </option>
                </select> </td></tr>
            </tbody></table>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
    </form>
</>)