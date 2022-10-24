import { styled, Box, Divider as MuiDivider, Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  height: "100vh",
  width: "240px",
  minWidth: "240px",
  fontSize: "14px",
  overflow: "auto",
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: "18px 26px",
}));
export const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "700",
  fontSize: "17px",
  marginBottom: "25px",
  "&>*:nth-of-type(1)": {
    height: "25px",
  },
}));

export const Item = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  padding: "7.5px 0px",
  "&>*:nth-of-type(1)": {
    fontSize: "20px",
  },
}));

export const Divider = styled(({ ...rest }) => <MuiDivider variant='horizontal' {...rest} />)(
  ({ theme }) => ({
    margin: "15px 0px",
    border: `0.5px solid ${theme.palette.soft}`,
  })
);

export const LoginText = styled(Box)(({ theme }) => ({ paddingBottom: "10px" }));

export const LoginButton = styled(({ ...props }) => (
  <Button startIcon={<AccountCircleOutlinedIcon />} variant='outlined' {...props} />
))(({ theme }) => ({
  height: "30px",
  fontSize: "13px",
  "&.MuiButton-outlined": {
    border: "1px solid #2196f3",
  },
  color: "#2196f3",
}));
