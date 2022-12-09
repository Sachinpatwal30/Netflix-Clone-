import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Admin Panel</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
              
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDFYKH1RnBgEaiV4Atu-MR5bXBDo08zglB0I7WMSPQrEw1xyl74hTcmCyPzGDWbxenKI&usqp=CAU" alt="" className="topAvatar" />
          </div>
        </div>
      </div>
    );
  }