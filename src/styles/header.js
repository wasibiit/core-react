const HeaderStyles = theme => ({
  appBar: {
    boxShadow: '0 1px 8px rgba(0,0,0,.3)',
    backgroundColor: "#1D2228",
    position: 'relative',
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
    },
    height: "70px"
  },
  toolBar: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  },
  branding: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    lineHeight: '50px',
    padding: `0 64px 0 0`,
  },
  logo: {
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '600px',
    },
  },
  searchWrapper: {
    flex: '1 1 0%',
    boxSizing:' border-box'
  },
  searchForm: {
    background: 'white',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    display: 'block',
    maxWidth: '800px',
  },
  searchInput: {
    fontSize: '1rem',
    padding: theme.spacing(1.9),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.2),
    },
    cursor: 'text',
    textIndent: '30px',
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: '0',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '0',
    marginTop: '-24px',
    color: 'rgba(0,0,0,.87)'
  }
});

export default HeaderStyles;