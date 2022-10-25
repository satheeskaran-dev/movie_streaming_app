import { styled, Toolbar as MuiToolbar, Button, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/system";

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  justifyContent: "space-between",
}));

export const LoginButton = styled(({ ...props }) => (
  <Button startIcon={<AccountCircleOutlinedIcon />} variant='outlined' {...props} />
))(({ theme }) => ({
  height: "30px",
  fontSize: "13px",
  margin: "0 10px",
  "&.MuiButton-outlined": {
    border: "1px solid #2196f3",
  },
  color: "#2196f3",
}));

export const SearchFieldWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "400px",
  width: "100%",
  margin: "0 10px",
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiOutlinedInput-root": {
    maxHeight: "36px",
    color: "#4E5983",
    backgroundColor: theme.palette.common.white,

    fieldset: {
      border: `.75px solid #3F44511F`,
    },

    "&.Mui-focused fieldset": {
      border: ".75px solid #3F44511F",
    },
  },

  "& .MuiInputBase-root.Mui-disabled": {
    fieldset: {
      borderColor: "#3F44511F",
    },
  },

  ".MuiOutlinedInput-root:hover": {
    fieldset: {
      borderColor: "#868DAA",
    },
  },

  input: {
    fontSize: "14px",

    "&::placeholder": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#181D333E",
      opacity: "1",
    },
    height: "44px",
    padding: "0 16px",
  },
}));
