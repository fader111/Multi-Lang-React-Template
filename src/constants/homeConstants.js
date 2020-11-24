import React from 'react'

import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import HistoryIcon from '@material-ui/icons/History';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
/*
  - enables users to browse community recipes
  - enables users to post recipes
  - enables users to see their posts in their dashboard
  - enables users to their preferred language
*/
export const aboutRolesData = [
  {
    title: "Browsing",
    icon: () => { return <LanguageIcon style={{fontSize: 80}} />},
    titleText: "Multilingual Support",
    desc: "Multilingual support allows for people form various countries and cultures to interact.",
    useDesc: "CI/CD Infrastructure",
    toolNamesList: [
      "Jenkins", "GitLab", "Docker", "Kubernetes", "Vagrant"
    ]
  },
  {
    title: "",
    icon: () => { return <AccountCircleIcon style={{fontSize: 80}} /> },
    titleText: "Custom User Profiles",
    desc: "User profiles allow you to follow others and gain a following.",
    useDesc: "",
    toolNamesList: [
      "React", "Vue.js", "CSS3 & Flexbox", "Next & Nuxt", "Flutter"
    ]
  },
  {
    title: "Dashboard View",
    icon: () => { return <HistoryIcon style={{fontSize: 80}} /> },
    titleText: "History Page",
    desc: "History Page allows for users to track posts they have liked or viewed.",
    useDesc: "Agile in Practice",
    toolNamesList: [
      "Jira", "Scrum for Trello", "Kanban", "Slack Bots", "Sprint Review"
    ]
  },
  
  {
    title: "Language",
    icon: () => { return <ForumIcon style={{fontSize: 80}} /> },
    titleText: "Community Posts",
    desc: "Community posts allow for users to interact with others in the community and share recipe ideas.",
    useDesc: "Agile in Practice",
    toolNamesList: [
      "Jira", "Scrum for Trello", "Kanban", "Slack Bots", "Sprint Review"
    ]
  }
]

export const homeIconLabelList = [
  {
    label: "+123 999 999 999",
    icon: () => { return <PhoneIcon style={{fontSize: 80}} /> },
  },
  {
    label: "+101 999 999 999",
    icon: () => { return <PrintIcon style={{fontSize: 80}} /> },
  },
  {
    label: "+info@tasteperfect.org",
    icon: () => { return <MailIcon style={{fontSize: 80}} /> },
  },
  {
    label: "Chuo City, Tokyo, JP",
    icon: () => { return <RoomIcon style={{fontSize: 80}} /> },
  },
];
