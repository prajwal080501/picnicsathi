import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    btn:{
        color: "black",
        boxShadow: "0 0px 4px 0 rgba(0, 0, 0, 0.1), 0 2px 12px 0 rgba(0, 0, 0, 0.19)",
        padding:"5px",
    },
    hoteltitle: {
        marginBottm:"15px",
        borderBottom:"1px solid black",
    },
    card: {
       boxShadow: " 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)" ,
    }
}));