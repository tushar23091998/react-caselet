import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome size={23} />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar Optimization',
    path: '/calendaroptimization',
    icon: <BsIcons.BsCalendarRange />,
    cName: 'nav-text'
  },
  {
    title: 'Post Event Analysis',
    path: '/posteventanalysis',
    icon: <SiIcons.SiSpeedtest />,
    cName: 'nav-text'
  }
];