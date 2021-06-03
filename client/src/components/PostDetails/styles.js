import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '500px',

    margin: '0px auto',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    alignItems: 'center',
  },
  section: {
    width: '40%',
    borderRadius: '20px',
    margin: '10px',
    // backgroundColor: 'white',
  },
  imageSection: {
    width: '60%',
    marginLeft: '10px',
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
    padding: '10px',
    borderRadius: '15px',
    width: '40%',
    margin: '0px auto',
    height: '39vh',
  },
}));
