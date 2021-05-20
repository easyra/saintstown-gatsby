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
                        <StyledPaper style={{ width: 'min-content', margin: ' 15px auto', padding: '15px' }}>
                            <CropTopButton />
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
  <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----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-----END PKCS7-----" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>




    </>
)

const CropTopButton = () => (
    <>
    <h3 style={{ textAlign: 'center' }}>Crop Top Hoodie</h3 >
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Pink">Pink </option>
            <option value="Mauve">Mauve </option>
          </select> </td></tr>
      <tr><td><input type="hidden" name="on1" defaultValue="Size" />Size</td></tr><tr><td><select name="os1">
            <option value="Small">Small </option>
            <option value="Medium">Medium </option>
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

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Black">Black </option>
            <option value="Lavender">Lavender </option>
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
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>

    </>
)

const MensButton = () => (<>
    <h3 style={{ textAlign: 'center' }}>Men's Tee</h3 >

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Black">Black </option>
            <option value="Brown">Brown </option>
          </select> </td></tr>
      <tr><td><input type="hidden" name="on1" defaultValue="Size" />Size</td></tr><tr><td><select name="os1">
            <option value="Small">Small </option>
            <option value="Medium">Medium </option>
            <option value="Large">Large </option>
          </select> </td></tr>
    </tbody></table>
  <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----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-----END PKCS7-----" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>


</>)

const WomensButton = () => (<>
    <h3 style={{ textAlign: 'center' }}>Women's Tee</h3 >
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Lavender">Lavender </option>
            <option value="Dark Grey">Dark Grey </option>
            <option value="Hunter Green">Hunter Green </option>
            <option value="Mustard Yellow">Mustard Yellow </option>
          </select> </td></tr>
      <tr><td><input type="hidden" name="on1" defaultValue="Size" />Size</td></tr><tr><td><select name="os1">
            <option value="Small">Small </option>
            <option value="Medium">Medium </option>
            <option value="Large">Large </option>
          </select> </td></tr>
    </tbody></table>
  <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----MIIHXwYJKoZIhvcNAQcEoIIHUDCCB0wCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYCGj11Mua4B+L5ctOZftusbNmrNqr5uHEncMZuHq51aEogn8JRTsqTh6Zj0BCDpJ7GbEXBwOkuJkDRzZDBwAbsY7J9tQ5j/zhalAQfcffCP0NBvVZt2fTD8lN1ZlhWONFp+TipRDajDS27WsuLCFggx+ya41qog2vZv2ismbxXXUDELMAkGBSsOAwIaBQAwgdwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIdgm+zU7Z71WAgbi5KF9jqdxuMfFyTsKfPj+URR9wsJ1mRqj3s0ws/EeiG8XlWPrgjGRFbxksL14BWlb8kB15oo/PmywDm3UcG+iK0u8SFd823JrbHNWVcIg92oy271XCGCL+96uh6OsRTXFBQWf7ajeXsjoKQeTf8YUe67rL/ObuQq/zPZP6+/vi5ZjIHFm8BY8HdvMNrWtC7LDlmGH2mEggRjjrysLZ+GWrZEXXt+2nOszx9/auzOTqhQVjp7SpiIYxoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMjEwNTIwMTk0MzMxWjAjBgkqhkiG9w0BCQQxFgQUCkoCyv6etHNqAE+lnZ4+Ok/g7/8wDQYJKoZIhvcNAQEBBQAEgYCvSkFBHCUtqTETfI9M8On/gXxEUy31WBP8e3I03x7cTa1R0glDdMF2G0cEJTYA514O1T/zMQeieLC5kARQ2BXyJ1J5V75yjfWmKfjKsJqR5vnQBvtQElx12EviZ/EE+iObP29YwTm0ZfzP2uZcEBOS+LQ7RSqMD7PpM3xAcFwEqw==-----END PKCS7-----" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>
</>)

const HoodieButton = () => (<>
    <h3 style={{ textAlign: 'center' }}>Hoodies</h3 >

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
  <table>
    <tbody><tr><td><input type="hidden" name="on0" defaultValue="Color" />Color</td></tr><tr><td><select name="os0">
            <option value="Camo Green">Camo Green </option>
            <option value="Camo Beige">Camo Beige </option>
          </select> </td></tr>
      <tr><td><input type="hidden" name="on1" defaultValue="Size" />Size</td></tr><tr><td><select name="os1">
            <option value="Small">Small </option>
            <option value="Medium">Medium </option>
            <option value="Large">Large </option>
            <option value="X-Large">X-Large </option>
          </select> </td></tr>
    </tbody></table>
  <input type="hidden" name="encrypted" defaultValue="-----BEGIN PKCS7-----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-----END PKCS7-----" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border={0} name="submit" alt="PayPal - The safer, easier way to pay online!" />
  <img alt border={0} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
</form>

</>)