import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
        margin: theme.spacing(3), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
      padding: '15px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '15px',
      width: '100%',
      alignSelf: 'center',
      justifySelf: 'center',
      marginTop: '2%',
      backgroundColor: '#ffff',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
    },
title: {
    color: "black",
    textAlign: 'center',
    fontWeight: '500',
    },
menuItem: {
  }
}));