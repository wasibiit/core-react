import StatCard from "../components/Cards/StatCard";

const StatCardStyles = theme => ({

  content: {

    position: 'relative',
    padding: theme.spacing(2),
    '&:last-child': {
      paddingBottom: theme.spacing(2),
      width: "150px",
      height: "100px",
      padding: "60px",
      backgroundColor: "#E1E2E2"
    }
  },
  icon: {
    boxShadow: 'none',
    color: '#E1E2E2'

  },
  title: {
    color: '#1D2228',
    textAlign: "center"
  },
  iconFloat: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    marginTop: '-20px',
    opacity: '0.2',
    transform: 'rotate(-5deg)',
    paddingLeft: "30px"
  },
  lightText: {
    color: 'white',
    marginTop: '-20px',


  }
});

export default StatCardStyles;