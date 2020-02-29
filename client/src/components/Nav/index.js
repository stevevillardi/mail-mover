import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserState";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
));

const StyledButton = withStyles({
    root: {
        backgroundColor: "#0e243e",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        "&:hover": {
            backgroundColor: "#000"
        }
    },
    label: {
        textTransform: "capitalize"
    }
})(Button);

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:hover": {
            backgroundColor: "#0e243e",
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

function Nav() {
    const { name, email } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="/dashboard">
                <i className="far fa-paper-plane fa-fw"></i>Mail Mover
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/dashboard">
                            Home
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/about">
                            About
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a
                            className="nav-link"
                            href="https://github.com/stevevillardi/mail-mover">
                            Source Code
                        </a>
                    </li>
                </ul>

                <StyledButton onClick={handleClick}>
                    <AccountCircleIcon fontSize="large" />
                    {name}
                </StyledButton>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <StyledMenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/profile">
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={`Settings (${email})`} />
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/enivronments">
                        <ListItemIcon>
                            <LocationCityIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Environments" />
                    </StyledMenuItem>
                    <StyledMenuItem
                        onClick={handleClose}
                        component={Link}
                        to="/auth/google/logout">
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </nav>
    );
}

export default Nav;
