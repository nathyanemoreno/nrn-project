
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        // height:'300px'
    },
    appbar: {
        background:'#f2f2f2',
        position:'static'
    }
    , 
    grid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    results: {
        background:'#5FFF87',
        padding:'0 16px 0 16px',
        margin:'16px'
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        alignSelf:'center',
        // width: '368px',
        elementType: 'div',
        // background: '#515151',
        padding: '0px 16px 0px 16px',
        margin: '16px 0 16px 0',
        border: '1px',
        borderRadius: '8px'
    },
    searchIcon: {
        color: '#1e1e1e'
    },
    inputBase: {
        flex: '1',
        fontSize: '1em',
        color: '#fff',
    },
    container: {
        // maxWidth: '2000px',
        // background: '#1e1e1e',
        // padding : '1em',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ul: {
        borderRadius: '8px',
        background: '#252931',
        display: 'flex',
        padding: '16px 8px 16px 8px',
        margin: '4px',
        minWidth: '341px',
        maxWidth:'500px'
    },
    li: {
        border: 0,
        borderRadius: '64px',
        // background: '#272c34',
        color: '#fff',
        padding: '2px',
        margin: '0 1px 0 1px',
        justifyContent: 'center'

    },
    button: {
        alignSelf: 'center',
        margin: '16px',
        padding:'8px',
        background: '#c4c4c4',
        color: '#1e1e1e',
        border:'0'
    }

});

export default useStyles;