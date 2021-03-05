import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FC} from "react";
import BlockOfProject from "../../PagesComponent/PortfolioPage/BlocksOfProject";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '80%',
            textAlign: "center",
            fontWeight: "bolder",
            margin: "0 auto"

        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,

        },
    }),
);


interface Props {
    title?: string,
    description: string,
    urlWatch: string,
    urlCode: string,
    src?: any
}

const SimpleAccordion: FC<Props> = ({
                                        title, description, urlWatch, urlCode, src
                                    }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <BlockOfProject description={description}
                                        urlWatch={urlWatch}
                                        urlCode={urlCode}
                                        src = {src}/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>)
}

export default SimpleAccordion