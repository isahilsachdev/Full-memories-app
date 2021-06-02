import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '50%',
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
  },
  imageSection: {
    width: '60%',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {},
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
}));
