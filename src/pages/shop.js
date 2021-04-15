import { Grid } from "@material-ui/core"
import React from "react"
import StyledButton from "../components/@shared/StyledButton"
import StyledPaper from "../components/@shared/StyledPaper"
import StyledSection from "../components/@shared/StyledSection"
import Layout from "../components/Layout"
import shirt01 from '../img/shirt01.jpg'


export default () => {
    return (
        <Layout>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12} md={4}>
                    <img src={shirt01} style={{ width: '100%', minWidth: 250, maxWidth: 750, padding: 25 }} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StyledPaper style={{ width: 'min-content', margin: 'auto', padding: '25px 15px' }}>
                        <h1 style={{ textAlign: 'center', lineHeight: 1.6, fontFamily: '' }}><span style={{ background: 'red', padding: "5px 10px", marginBottom: 10, fontFamily: 'inherit' }}>VULNERABILITY</span><br />THE NEW SEXY</h1>

                    </StyledPaper>
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
                    </Grid>

                </Grid>
            </Grid>



        </Layout>
    )
}

const HatsButton = () => (
    <>
    <h3 style={{ textAlign: 'center' }}>Hats</h3 >

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_xclick" />
  <input type="hidden" name="business" defaultValue="GUEYYY9M5UJSN" />
  <input type="hidden" name="lc" defaultValue="US" />
  <input type="hidden" name="item_name" defaultValue="Vulnerability is the New Sexy Hoodies" />
  <input type="hidden" name="amount" defaultValue={25.00} />
  <input type="hidden" name="currency_code" defaultValue="USD" />
  <input type="hidden" name="button_subtype" defaultValue="services" />
  <input type="hidden" name="shipping" defaultValue="4.25" />
  <input type="hidden" name="bn" defaultValue="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Camo Black">Camo Black </option>
            <option value="Camo Grey">Camo Grey </option>
          </select> </td></tr>
    </tbody></table>
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
        <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
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