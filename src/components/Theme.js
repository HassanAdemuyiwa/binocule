import { createMuiTheme } from '@material-ui/core/styles';

const mainBlue = '#007fff';
const mainOrange = '#f64762'

export default createMuiTheme(
    {
        palette: {
            common: {
                blue: `${mainBlue}`,
                orange: `${mainOrange}`
            },
            primary: {
                main:`${mainBlue}`
            },
            secondary: {
                main: `${mainOrange}`
            },
            
        }, 
        typography: {
            head: {
                fontFamily: 'Raleway',
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1.5rem'
            },
            subhead:{
                fontFamily: 'Roboto',
                fontSize: '0.5rem',
                textTransform: 'none',
                fontWeight:400
            }
        }  

    }
)