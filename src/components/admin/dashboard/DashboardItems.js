import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import HotelIcon from '@mui/icons-material/Hotel';
import FlagIcon from '@mui/icons-material/Flag';
import PersonIcon from '@mui/icons-material/Person';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <PersonIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MenuIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Navigation" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ArticleIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="News" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <DownhillSkiingIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Things to do" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <HotelIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Places to stay" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <FlagIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Countries" />
        </ListItemButton>
    </React.Fragment>
);

// export const secondaryListItems = (
//     <React.Fragment>
//         <ListSubheader component="div" inset>
//             Saved reports
//         </ListSubheader>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItemButton>
//         <ListItemButton>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItemButton>
//     </React.Fragment>
// );