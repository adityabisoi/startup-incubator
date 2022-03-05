import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '69%',
    maxHeight: '600px',
    height:"305px",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height:"231px",
    },
 

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      
      flexDirection: 'column-reverse',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    display: "flex",
    justifyContent: "center",
    width:"43%",
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width:"93%",
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  div:{
    width: '70%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));