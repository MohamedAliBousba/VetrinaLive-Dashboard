import { Box, Paper, Stack } from '@mui/material'

const cardStyle = {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
}

const cardHeaderTitle = {
    fontSize: 20,
    fontWeight: 500,
    color: "#103B66"
}

interface ICustomCard {
    sx?: React.CSSProperties;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    menu?: React.ReactNode
}

const CustomCard: React.FC<ICustomCard> = ({ sx, children, icon, title, menu }) => {

    return (
        <Paper elevation={2} sx={{ borderRadius: "10px", ...cardStyle, ...sx}}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={1.5} alignItems="center">
                    {icon}
                    { title && <p style={cardHeaderTitle}>{title}</p> }
                </Stack>
                { menu && menu }
            </Box>
            {children}
        </Paper>
    )
}

export default CustomCard
