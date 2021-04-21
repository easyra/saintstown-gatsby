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
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default () => {
    const [pointer, setPointer] = useState(0)
    const shirtArr = [shirt01,shirt09,shirt10,shirt11, shirt02,shirt08, shirt03, shirt04, shirt05, shirt06, ]
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
                <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
                    <option value="Camoflauge">Camoflauge </option>
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
        <h3 style={{ textAlign: 'center' }}>Crew neck Sweaters's Tee</h3 >

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
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
                        <option value="Extra Large">Extra Large </option>
                        <option value="XX-Large">XX-Large </option>
                    </select> </td></tr>
                </tbody></table>
            <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
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