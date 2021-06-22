const SessionStyles = theme => ({
  card: {
    overflow: 'visible'
  },
  session: {
    position: 'relative',
    zIndex: 4000,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  background: {
    backgroundColor: "#1D2228",
  },
  content: {
    padding: `100px ${theme.spacing(1)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    flexDirection: 'column',
    minHeight: '100%',
    textAlign: 'center'
  },
  wrapper: {
    flex: 'none',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto',
    borderRadius: "25px",
  },
  avatar: {
    position: 'relative',
    display: 'block',
    margin: '-75px auto 0'
  },
  lockscreenWrapper: {
    flex: 'none',
    maxWidth: '280px',
    width: '100%',
    margin: '0 auto',
  },
  title: {
    fontSize: '150px',
    lineHeight: 1.2,
    fontWeight: 100,
    display: 'inline-table',
    position: 'relative',
    background: theme.palette.primary.main,
    color: '#fff',
    padding: `0 ${theme.spacing(3)}px`,
    borderRadius: '60px',
    cursor: 'pointer',
    margin: `0 0 ${theme.spacing(1)}px`,
    '&:after': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: '""',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderTopColor: theme.palette.primary.main,
      borderWidth: '8px',
      marginLeft: '-8px'
    }
  },
  subtitle: {
    fontSize: '32px',
    fontWeight: 900
  },
  fullWidth: {
    width: '100%'
  },
  root: {
    width: '200%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  myButton: {
    backgroundColor: "#FB8122",
  },
  media: {
    height: "200px"
}
});

export default SessionStyles;