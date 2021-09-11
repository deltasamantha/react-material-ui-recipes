import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    container: {
        flexDirection: "row",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(9, 0, 6)
    }
}));

export default useStyles;