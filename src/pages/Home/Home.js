import React from "react";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Home.css";

const CardData = [
  {
    title: "Calendar Optimization",
    path: "/calendaroptimization",
    icon: <BsIcons.BsCalendarRange size={30}/>,
    text: "Create a new calendar from the future or update/re-optimize your current plan"
  },
  {
    title: "Post Event Analysis",
    path: "/posteventanalysis",
    icon: <SiIcons.SiSpeedtest size={30}/>,
    text: "Review the performance of past promotions based on uplifts and financial KPIs"
  },
];

const Home = () => {
  return (
    <div className="home flex-container">
      {CardData.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path}>
              <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                     <div className='card-icon'>{item.icon}</div>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Home;
