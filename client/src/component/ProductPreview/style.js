import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  container:{
   marginTop:"4rem",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  grid:{
    height: "21rem",
    padding: "16px",
    marginLeft: "1rem",
    marginRight: "1rem",
  }
}));