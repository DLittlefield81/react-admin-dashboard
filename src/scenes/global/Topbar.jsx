import React, { useContext } from 'react';
import { Box, InputBase, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            </Box>
            <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
            </IconButton>

            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeIcon />
                    ) : (
                        <LightModeIcon />
                    )}
                </IconButton>
                <IconButton>
                    <PersonOutlineIcon />
                </IconButton>
                <IconButton >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <NotificationsIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar
