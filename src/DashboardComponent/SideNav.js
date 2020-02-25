import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import './SideNav.css'
import CampaignTable from './CampaignTable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 330,
    backgroundColor: theme.palette.background.paper,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

function SideNav() {
  const classes = useStyles();

  return (
      <div>
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Campaign" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Message Template" />
        </ListItem>
      </List>
    <div>
        <Divider></Divider>
      <div className="legal">
                <div class="copyright">
                    © 2019 - 2020 <a href="javascript:void(0);">Butterfly Group</a>.
                </div>
                <div className="version">
                    <b>Version: </b> 1.0.0
                </div>
      </div>
      </div>
    </div>
    <div className="SideNavContent">
        <CampaignTable></CampaignTable>
    </div>
    </div>
  );
}

export default SideNav;