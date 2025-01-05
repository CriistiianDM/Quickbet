// Material IU
import Typography from '@mui/material/Typography';

type Props = {
    text: string,
    sx: object
}

export default (props: Props) => {
    const { text, sx } = props
    return (
        <Typography sx={sx} variant="h5" gutterBottom>
            {text}
        </Typography>
    )
}